import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableKeyXAmzTargetEnum {
    TrentServiceDisableKey = "TrentService.DisableKey"
}
export declare class DisableKeyRequest extends SpeakeasyBase {
    disableKeyRequest: shared.DisableKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableKeyXAmzTargetEnum;
}
export declare class DisableKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
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
}
