import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelKeyDeletionXAmzTargetEnum {
    TrentServiceCancelKeyDeletion = "TrentService.CancelKeyDeletion"
}
export declare class CancelKeyDeletionRequest extends SpeakeasyBase {
    cancelKeyDeletionRequest: shared.CancelKeyDeletionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelKeyDeletionXAmzTargetEnum;
}
export declare class CancelKeyDeletionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelKeyDeletionResponse?: shared.CancelKeyDeletionResponse;
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
