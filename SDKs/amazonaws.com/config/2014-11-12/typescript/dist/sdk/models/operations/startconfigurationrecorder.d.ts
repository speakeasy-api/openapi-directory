import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServiceStartConfigurationRecorder = "StarlingDoveService.StartConfigurationRecorder"
}
export declare class StartConfigurationRecorderRequest extends SpeakeasyBase {
    startConfigurationRecorderRequest: shared.StartConfigurationRecorderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartConfigurationRecorderXAmzTargetEnum;
}
export declare class StartConfigurationRecorderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoAvailableDeliveryChannelException
     */
    noAvailableDeliveryChannelException?: any;
    /**
     * NoSuchConfigurationRecorderException
     */
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
