import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UnassignVolumeXAmzTargetEnum {
    OpsWorks20130218UnassignVolume = "OpsWorks_20130218.UnassignVolume"
}
export declare class UnassignVolumeRequest extends SpeakeasyBase {
    unassignVolumeRequest: shared.UnassignVolumeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnassignVolumeXAmzTargetEnum;
}
export declare class UnassignVolumeResponse extends SpeakeasyBase {
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
