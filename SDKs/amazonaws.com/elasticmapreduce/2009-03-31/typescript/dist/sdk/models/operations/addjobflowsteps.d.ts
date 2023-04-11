import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddJobFlowStepsXAmzTargetEnum {
    ElasticMapReduceAddJobFlowSteps = "ElasticMapReduce.AddJobFlowSteps"
}
export declare class AddJobFlowStepsRequest extends SpeakeasyBase {
    addJobFlowStepsInput: shared.AddJobFlowStepsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddJobFlowStepsXAmzTargetEnum;
}
export declare class AddJobFlowStepsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addJobFlowStepsOutput?: shared.AddJobFlowStepsOutput;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
