import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelStepsXAmzTargetEnum {
    ElasticMapReduceCancelSteps = "ElasticMapReduce.CancelSteps"
}
export declare class CancelStepsRequest extends SpeakeasyBase {
    cancelStepsInput: shared.CancelStepsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelStepsXAmzTargetEnum;
}
export declare class CancelStepsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelStepsOutput?: shared.CancelStepsOutput;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
