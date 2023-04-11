import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopAutoMLJobXAmzTargetEnum {
    SageMakerStopAutoMLJob = "SageMaker.StopAutoMLJob"
}
export declare class StopAutoMLJobRequest extends SpeakeasyBase {
    stopAutoMLJobRequest: shared.StopAutoMLJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAutoMLJobXAmzTargetEnum;
}
export declare class StopAutoMLJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
