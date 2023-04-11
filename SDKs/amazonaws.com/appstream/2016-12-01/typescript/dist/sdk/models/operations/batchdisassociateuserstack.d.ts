import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDisassociateUserStackXAmzTargetEnum {
    PhotonAdminProxyServiceBatchDisassociateUserStack = "PhotonAdminProxyService.BatchDisassociateUserStack"
}
export declare class BatchDisassociateUserStackRequest extends SpeakeasyBase {
    batchDisassociateUserStackRequest: shared.BatchDisassociateUserStackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDisassociateUserStackXAmzTargetEnum;
}
export declare class BatchDisassociateUserStackResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDisassociateUserStackResult?: shared.BatchDisassociateUserStackResult;
    contentType: string;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
