import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Updates and saves all of the information about a form, based on form ID.
 */
export declare class UpdateFormRequestBodyUpdatedForm extends SpeakeasyBase {
    cta?: shared.FormCTA;
    dataType?: shared.FormDataTypeConfig;
    fields?: Record<string, shared.FieldConfig>;
    formActionType?: shared.FormActionTypeEnum;
    name?: string;
    schemaVersion?: string;
    sectionalElements?: Record<string, shared.SectionalElement>;
    style?: shared.FormStyle;
}
export declare class UpdateFormRequestBody extends SpeakeasyBase {
    /**
     * Updates and saves all of the information about a form, based on form ID.
     */
    updatedForm: UpdateFormRequestBodyUpdatedForm;
}
export declare class UpdateFormRequest extends SpeakeasyBase {
    requestBody: UpdateFormRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID for the Amplify app.
     */
    appId: string;
    /**
     * The unique client token.
     */
    clientToken?: string;
    /**
     * The name of the backend environment that is part of the Amplify app.
     */
    environmentName: string;
    /**
     * The unique ID for the form.
     */
    id: string;
}
export declare class UpdateFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * Success
     */
    updateFormResponse?: shared.UpdateFormResponse;
}
