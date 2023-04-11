import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutResourceConfigXAmzTargetEnum {
    StarlingDoveServicePutResourceConfig = "StarlingDoveService.PutResourceConfig"
}
export declare class PutResourceConfigRequest extends SpeakeasyBase {
    putResourceConfigRequest: shared.PutResourceConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourceConfigXAmzTargetEnum;
}
export declare class PutResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    /**
     * MaxActiveResourcesExceededException
     */
    maxActiveResourcesExceededException?: any;
    /**
     * NoRunningConfigurationRecorderException
     */
    noRunningConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
