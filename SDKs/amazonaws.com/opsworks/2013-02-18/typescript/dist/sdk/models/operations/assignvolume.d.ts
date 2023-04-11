import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssignVolumeXAmzTargetEnum {
    OpsWorks20130218AssignVolume = "OpsWorks_20130218.AssignVolume"
}
export declare class AssignVolumeRequest extends SpeakeasyBase {
    assignVolumeRequest: shared.AssignVolumeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssignVolumeXAmzTargetEnum;
}
export declare class AssignVolumeResponse extends SpeakeasyBase {
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
