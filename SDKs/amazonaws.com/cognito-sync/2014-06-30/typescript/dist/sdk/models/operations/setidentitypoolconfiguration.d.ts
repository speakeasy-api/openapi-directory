import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration options for configure Cognito streams.
 */
export declare class SetIdentityPoolConfigurationRequestBodyCognitoStreams extends SpeakeasyBase {
    roleArn?: string;
    streamName?: string;
    streamingStatus?: shared.StreamingStatusEnum;
}
/**
 * Configuration options to be applied to the identity pool.
 */
export declare class SetIdentityPoolConfigurationRequestBodyPushSync extends SpeakeasyBase {
    applicationArns?: string[];
    roleArn?: string;
}
export declare class SetIdentityPoolConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Configuration options for configure Cognito streams.
     */
    cognitoStreams?: SetIdentityPoolConfigurationRequestBodyCognitoStreams;
    /**
     * Configuration options to be applied to the identity pool.
     */
    pushSync?: SetIdentityPoolConfigurationRequestBodyPushSync;
}
export declare class SetIdentityPoolConfigurationRequest extends SpeakeasyBase {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.
     */
    identityPoolId: string;
    requestBody: SetIdentityPoolConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SetIdentityPoolConfigurationResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    setIdentityPoolConfigurationResponse?: shared.SetIdentityPoolConfigurationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
