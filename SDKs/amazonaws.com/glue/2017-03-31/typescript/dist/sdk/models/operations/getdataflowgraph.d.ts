import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataflowGraphXAmzTargetEnum {
    AWSGlueGetDataflowGraph = "AWSGlue.GetDataflowGraph"
}
export declare class GetDataflowGraphRequest extends SpeakeasyBase {
    getDataflowGraphRequest: shared.GetDataflowGraphRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataflowGraphXAmzTargetEnum;
}
export declare class GetDataflowGraphResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDataflowGraphResponse?: shared.GetDataflowGraphResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
