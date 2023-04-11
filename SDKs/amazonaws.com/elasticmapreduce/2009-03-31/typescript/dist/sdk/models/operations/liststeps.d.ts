import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStepsXAmzTargetEnum {
    ElasticMapReduceListSteps = "ElasticMapReduce.ListSteps"
}
export declare class ListStepsRequest extends SpeakeasyBase {
    listStepsInput: shared.ListStepsInput;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStepsXAmzTargetEnum;
}
export declare class ListStepsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listStepsOutput?: shared.ListStepsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
