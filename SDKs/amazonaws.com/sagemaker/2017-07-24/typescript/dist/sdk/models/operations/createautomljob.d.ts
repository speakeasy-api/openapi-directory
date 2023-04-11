import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAutoMLJobXAmzTargetEnum {
    SageMakerCreateAutoMLJob = "SageMaker.CreateAutoMLJob"
}
export declare class CreateAutoMLJobRequest extends SpeakeasyBase {
    createAutoMLJobRequest: shared.CreateAutoMLJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAutoMLJobXAmzTargetEnum;
}
export declare class CreateAutoMLJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAutoMLJobResponse?: shared.CreateAutoMLJobResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
