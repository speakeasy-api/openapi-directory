import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetKeyRotationStatusXAmzTargetEnum {
    TrentServiceGetKeyRotationStatus = "TrentService.GetKeyRotationStatus"
}
export declare class GetKeyRotationStatusRequest extends SpeakeasyBase {
    getKeyRotationStatusRequest: shared.GetKeyRotationStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetKeyRotationStatusXAmzTargetEnum;
}
export declare class GetKeyRotationStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * Success
     */
    getKeyRotationStatusResponse?: shared.GetKeyRotationStatusResponse;
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
