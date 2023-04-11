import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFormRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the Amplify app.
     */
    appId: string;
    /**
     * The name of the backend environment that is part of the Amplify app.
     */
    environmentName: string;
    /**
     * The unique ID of the form.
     */
    id: string;
}
export declare class GetFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getFormResponse?: shared.GetFormResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
