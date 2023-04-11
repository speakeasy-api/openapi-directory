import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMetadataRequest extends SpeakeasyBase {
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
}
export declare class GetMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getMetadataResponse?: shared.GetMetadataResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
