import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchAssociateUserStackXAmzTargetEnum {
    PhotonAdminProxyServiceBatchAssociateUserStack = "PhotonAdminProxyService.BatchAssociateUserStack"
}
export declare class BatchAssociateUserStackRequest extends SpeakeasyBase {
    batchAssociateUserStackRequest: shared.BatchAssociateUserStackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchAssociateUserStackXAmzTargetEnum;
}
export declare class BatchAssociateUserStackResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchAssociateUserStackResult?: shared.BatchAssociateUserStackResult;
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
