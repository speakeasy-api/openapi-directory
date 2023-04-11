import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings extends SpeakeasyBase {
    /**
     * True is the form element is required for submission.
     */
    isRequired?: boolean;
    senderEmail?: boolean;
    /**
     * True if the submitted response should be used as the name for the new folder.
     */
    useAsFolderName?: boolean;
}
/**
 * Type of form field to use.
 */
export declare enum UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum {
    Name = "name",
    Email = "email",
    Text = "text",
    Textarea = "textarea",
    UploadArea = "upload_area"
}
export declare class UpdateFormByIdUpdateFormByIdRequestBodyElements extends SpeakeasyBase {
    /**
     * ID of the form element. If you're adding a new element to the form, do not include this field.
     */
    id?: number;
    /**
     * Name of the form element.
     */
    name?: string;
    /**
     * The order the fields will be displayed to the recipient. Starts at 0.
     */
    order?: number;
    settings?: UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings;
    /**
     * Type of form field to use.
     */
    type?: UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum;
}
/**
 * CSS Styles of the form.
 */
export declare class UpdateFormByIdUpdateFormByIdRequestBody extends SpeakeasyBase {
    cssStyles?: string;
    elements?: UpdateFormByIdUpdateFormByIdRequestBodyElements[];
    /**
     * Set a description for the form that will be visible to recipients.
     */
    formDescription?: string;
    /**
     * Text to be displayed on the submission button.
     */
    submitButtonText?: string;
    /**
     * Text to be displayed when a recipient has submitted the form.
     */
    successMessage?: string;
}
export declare class UpdateFormByIdRequest extends SpeakeasyBase {
    requestBody?: UpdateFormByIdUpdateFormByIdRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * Form unique ID number.
     */
    id: number;
}
export declare class UpdateFormByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    formResponse?: shared.FormResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
