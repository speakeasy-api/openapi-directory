import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetQueryExecutionXAmzTargetEnum {
    AmazonAthenaGetQueryExecution = "AmazonAthena.GetQueryExecution"
}
export declare class GetQueryExecutionRequest extends SpeakeasyBase {
    getQueryExecutionInput: shared.GetQueryExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQueryExecutionXAmzTargetEnum;
}
export declare class GetQueryExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getQueryExecutionOutput?: shared.GetQueryExecutionOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
