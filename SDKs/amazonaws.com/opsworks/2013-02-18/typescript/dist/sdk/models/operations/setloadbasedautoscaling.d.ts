import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetLoadBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218SetLoadBasedAutoScaling = "OpsWorks_20130218.SetLoadBasedAutoScaling"
}
export declare class SetLoadBasedAutoScalingRequest extends SpeakeasyBase {
    setLoadBasedAutoScalingRequest: shared.SetLoadBasedAutoScalingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetLoadBasedAutoScalingXAmzTargetEnum;
}
export declare class SetLoadBasedAutoScalingResponse extends SpeakeasyBase {
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
