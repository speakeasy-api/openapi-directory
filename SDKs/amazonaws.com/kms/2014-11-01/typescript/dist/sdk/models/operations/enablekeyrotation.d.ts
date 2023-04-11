import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableKeyRotationXAmzTargetEnum {
    TrentServiceEnableKeyRotation = "TrentService.EnableKeyRotation"
}
export declare class EnableKeyRotationRequest extends SpeakeasyBase {
    enableKeyRotationRequest: shared.EnableKeyRotationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableKeyRotationXAmzTargetEnum;
}
export declare class EnableKeyRotationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * DisabledException
     */
    disabledException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
