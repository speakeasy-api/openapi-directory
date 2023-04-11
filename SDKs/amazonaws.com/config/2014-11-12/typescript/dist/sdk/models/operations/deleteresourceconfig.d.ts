import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourceConfigXAmzTargetEnum {
    StarlingDoveServiceDeleteResourceConfig = "StarlingDoveService.DeleteResourceConfig"
}
export declare class DeleteResourceConfigRequest extends SpeakeasyBase {
    deleteResourceConfigRequest: shared.DeleteResourceConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceConfigXAmzTargetEnum;
}
export declare class DeleteResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
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
