import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteServerXAmzTargetEnum {
    OpsWorksCMV20161101DeleteServer = "OpsWorksCM_V2016_11_01.DeleteServer"
}
export declare class DeleteServerRequest extends SpeakeasyBase {
    deleteServerRequest: shared.DeleteServerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServerXAmzTargetEnum;
}
export declare class DeleteServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteServerResponse?: Record<string, any>;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
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
