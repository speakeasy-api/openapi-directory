import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBulkPublishDetailsRequest extends SpeakeasyBase {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    identityPoolId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBulkPublishDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBulkPublishDetailsResponse?: shared.GetBulkPublishDetailsResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
