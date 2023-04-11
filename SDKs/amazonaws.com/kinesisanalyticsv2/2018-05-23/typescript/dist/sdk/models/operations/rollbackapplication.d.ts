import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RollbackApplicationXAmzTargetEnum {
    KinesisAnalytics20180523RollbackApplication = "KinesisAnalytics_20180523.RollbackApplication"
}
export declare class RollbackApplicationRequest extends SpeakeasyBase {
    rollbackApplicationRequest: shared.RollbackApplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RollbackApplicationXAmzTargetEnum;
}
export declare class RollbackApplicationResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    rollbackApplicationResponse?: shared.RollbackApplicationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
