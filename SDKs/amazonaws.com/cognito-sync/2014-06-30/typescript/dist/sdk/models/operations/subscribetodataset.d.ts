import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SubscribeToDatasetRequest extends SpeakeasyBase {
    /**
     * The name of the dataset to subcribe to.
     */
    datasetName: string;
    /**
     * The unique ID generated for this device by Cognito.
     */
    deviceId: string;
    /**
     * Unique ID for this identity.
     */
    identityId: string;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.
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
export declare class SubscribeToDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidConfigurationException
     */
    invalidConfigurationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    subscribeToDatasetResponse?: Record<string, any>;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
