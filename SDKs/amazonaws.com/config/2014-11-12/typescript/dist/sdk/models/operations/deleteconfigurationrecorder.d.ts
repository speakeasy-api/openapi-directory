import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServiceDeleteConfigurationRecorder = "StarlingDoveService.DeleteConfigurationRecorder"
}
export declare class DeleteConfigurationRecorderRequest extends SpeakeasyBase {
    deleteConfigurationRecorderRequest: shared.DeleteConfigurationRecorderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConfigurationRecorderXAmzTargetEnum;
}
export declare class DeleteConfigurationRecorderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoSuchConfigurationRecorderException
     */
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
