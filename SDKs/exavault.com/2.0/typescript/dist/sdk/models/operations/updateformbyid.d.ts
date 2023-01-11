import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFormByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateFormByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings extends SpeakeasyBase {
    isRequired?: boolean;
    senderEmail?: boolean;
    useAsFolderName?: boolean;
}
export declare enum UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum {
    Name = "name",
    Email = "email",
    Text = "text",
    Textarea = "textarea",
    UploadArea = "upload_area"
}
export declare class UpdateFormByIdUpdateFormByIdRequestBodyElements extends SpeakeasyBase {
    id?: number;
    name?: string;
    order?: number;
    settings?: UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings;
    type?: UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum;
}
/**
 * CSS Styles of the form.
**/
export declare class UpdateFormByIdUpdateFormByIdRequestBody extends SpeakeasyBase {
    cssStyles?: string;
    elements?: UpdateFormByIdUpdateFormByIdRequestBodyElements[];
    formDescription?: string;
    submitButtonText?: string;
    successMessage?: string;
}
export declare class UpdateFormByIdRequest extends SpeakeasyBase {
    pathParams: UpdateFormByIdPathParams;
    headers: UpdateFormByIdHeaders;
    request?: UpdateFormByIdUpdateFormByIdRequestBody;
}
export declare class UpdateFormByIdResponse extends SpeakeasyBase {
    contentType: string;
    formResponse?: shared.FormResponse;
    statusCode: number;
}
