import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreServerXAmzTargetEnum {
    OpsWorksCMV20161101RestoreServer = "OpsWorksCM_V2016_11_01.RestoreServer"
}
export declare class RestoreServerRequest extends SpeakeasyBase {
    restoreServerRequest: shared.RestoreServerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreServerXAmzTargetEnum;
}
export declare class RestoreServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    restoreServerResponse?: shared.RestoreServerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
