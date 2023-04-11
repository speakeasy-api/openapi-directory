import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServiceStopConfigurationRecorder = "StarlingDoveService.StopConfigurationRecorder"
}
export declare class StopConfigurationRecorderRequest extends SpeakeasyBase {
    stopConfigurationRecorderRequest: shared.StopConfigurationRecorderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopConfigurationRecorderXAmzTargetEnum;
}
export declare class StopConfigurationRecorderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoSuchConfigurationRecorderException
     */
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
