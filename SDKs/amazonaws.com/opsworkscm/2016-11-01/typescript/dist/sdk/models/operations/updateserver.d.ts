import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServerXAmzTargetEnum {
    OpsWorksCMV20161101UpdateServer = "OpsWorksCM_V2016_11_01.UpdateServer"
}
export declare class UpdateServerRequest extends SpeakeasyBase {
    updateServerRequest: shared.UpdateServerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServerXAmzTargetEnum;
}
export declare class UpdateServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateServerResponse?: shared.UpdateServerResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
