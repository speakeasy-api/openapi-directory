import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetQueryRuntimeStatisticsXAmzTargetEnum {
    AmazonAthenaGetQueryRuntimeStatistics = "AmazonAthena.GetQueryRuntimeStatistics"
}
export declare class GetQueryRuntimeStatisticsRequest extends SpeakeasyBase {
    getQueryRuntimeStatisticsInput: shared.GetQueryRuntimeStatisticsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQueryRuntimeStatisticsXAmzTargetEnum;
}
export declare class GetQueryRuntimeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getQueryRuntimeStatisticsOutput?: shared.GetQueryRuntimeStatisticsOutput;
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
