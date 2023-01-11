import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFormByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateFormByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=senderEmail" })
  senderEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useAsFolderName" })
  useAsFolderName?: boolean;
}

export enum UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum {
    Name = "name",
    Email = "email",
    Text = "text",
    Textarea = "textarea",
    UploadArea = "upload_area"
}


export class UpdateFormByIdUpdateFormByIdRequestBodyElements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum;
}


// UpdateFormByIdUpdateFormByIdRequestBody
/** 
 * CSS Styles of the form.
**/
export class UpdateFormByIdUpdateFormByIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cssStyles" })
  cssStyles?: string;

  @SpeakeasyMetadata({ data: "json, name=elements", elemType: UpdateFormByIdUpdateFormByIdRequestBodyElements })
  elements?: UpdateFormByIdUpdateFormByIdRequestBodyElements[];

  @SpeakeasyMetadata({ data: "json, name=formDescription" })
  formDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=submitButtonText" })
  submitButtonText?: string;

  @SpeakeasyMetadata({ data: "json, name=successMessage" })
  successMessage?: string;
}


export class UpdateFormByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFormByIdPathParams;

  @SpeakeasyMetadata()
  headers: UpdateFormByIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateFormByIdUpdateFormByIdRequestBody;
}


export class UpdateFormByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  formResponse?: shared.FormResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
