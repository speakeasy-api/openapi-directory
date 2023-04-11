import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DetachSecurityProfileRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The security profile that is detached.
     */
    securityProfileName: string;
    /**
     * The ARN of the thing group from which the security profile is detached.
     */
    securityProfileTargetArn: string;
}
export declare class DetachSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detachSecurityProfileResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
