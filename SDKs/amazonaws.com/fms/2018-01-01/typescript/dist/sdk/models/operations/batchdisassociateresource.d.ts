import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDisassociateResourceXAmzTargetEnum {
    AWSFMS20180101BatchDisassociateResource = "AWSFMS_20180101.BatchDisassociateResource"
}
export declare class BatchDisassociateResourceRequest extends SpeakeasyBase {
    batchDisassociateResourceRequest: shared.BatchDisassociateResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDisassociateResourceXAmzTargetEnum;
}
export declare class BatchDisassociateResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDisassociateResourceResponse?: shared.BatchDisassociateResourceResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
