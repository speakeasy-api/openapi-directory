import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents all of the information that is required to create a form.
 */
export declare class CreateFormRequestBodyFormToCreate extends SpeakeasyBase {
    cta?: shared.FormCTA;
    dataType?: shared.FormDataTypeConfig;
    fields?: Record<string, shared.FieldConfig>;
    formActionType?: shared.FormActionTypeEnum;
    name?: string;
    schemaVersion?: string;
    sectionalElements?: Record<string, shared.SectionalElement>;
    style?: shared.FormStyle;
    tags?: Record<string, string>;
}
export declare class CreateFormRequestBody extends SpeakeasyBase {
    /**
     * Represents all of the information that is required to create a form.
     */
    formToCreate: CreateFormRequestBodyFormToCreate;
}
export declare class CreateFormRequest extends SpeakeasyBase {
    requestBody: CreateFormRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the Amplify app to associate with the form.
     */
    appId: string;
    /**
     * The unique client token.
     */
    clientToken?: string;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     */
    environmentName: string;
}
export declare class CreateFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFormResponse?: shared.CreateFormResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
