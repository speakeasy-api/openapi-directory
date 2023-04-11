import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServicePutConfigurationRecorder = "StarlingDoveService.PutConfigurationRecorder"
}
export declare class PutConfigurationRecorderRequest extends SpeakeasyBase {
    putConfigurationRecorderRequest: shared.PutConfigurationRecorderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutConfigurationRecorderXAmzTargetEnum;
}
export declare class PutConfigurationRecorderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidConfigurationRecorderNameException
     */
    invalidConfigurationRecorderNameException?: any;
    /**
     * InvalidRecordingGroupException
     */
    invalidRecordingGroupException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * MaxNumberOfConfigurationRecordersExceededException
     */
    maxNumberOfConfigurationRecordersExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
