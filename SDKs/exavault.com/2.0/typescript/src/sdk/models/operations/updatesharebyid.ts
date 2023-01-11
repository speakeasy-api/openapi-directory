import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateShareByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateShareByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class UpdateShareByIdUpdateShareRequestBodyRecipients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateShareByIdUpdateShareRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessMode" })
  accessMode?: shared.AccessMode;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: Date;

  @SpeakeasyMetadata({ data: "json, name=fileDropCreateFolders" })
  fileDropCreateFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasNotification" })
  hasNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messageBody" })
  messageBody?: string;

  @SpeakeasyMetadata({ data: "json, name=messageSubject" })
  messageSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationEmails" })
  notificationEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: UpdateShareByIdUpdateShareRequestBodyRecipients })
  recipients?: UpdateShareByIdUpdateShareRequestBodyRecipients[];

  @SpeakeasyMetadata({ data: "json, name=requireEmail" })
  requireEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}


export class UpdateShareByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateShareByIdPathParams;

  @SpeakeasyMetadata()
  headers: UpdateShareByIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateShareByIdUpdateShareRequestBody;
}


export class UpdateShareByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shareResponse?: shared.ShareResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
