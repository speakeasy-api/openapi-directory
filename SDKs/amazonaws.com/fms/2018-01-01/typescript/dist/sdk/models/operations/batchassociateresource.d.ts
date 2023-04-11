import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchAssociateResourceXAmzTargetEnum {
    AWSFMS20180101BatchAssociateResource = "AWSFMS_20180101.BatchAssociateResource"
}
export declare class BatchAssociateResourceRequest extends SpeakeasyBase {
    batchAssociateResourceRequest: shared.BatchAssociateResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchAssociateResourceXAmzTargetEnum;
}
export declare class BatchAssociateResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchAssociateResourceResponse?: shared.BatchAssociateResourceResponse;
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
