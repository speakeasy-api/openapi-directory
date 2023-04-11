import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetTimeBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218SetTimeBasedAutoScaling = "OpsWorks_20130218.SetTimeBasedAutoScaling"
}
export declare class SetTimeBasedAutoScalingRequest extends SpeakeasyBase {
    setTimeBasedAutoScalingRequest: shared.SetTimeBasedAutoScalingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetTimeBasedAutoScalingXAmzTargetEnum;
}
export declare class SetTimeBasedAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
