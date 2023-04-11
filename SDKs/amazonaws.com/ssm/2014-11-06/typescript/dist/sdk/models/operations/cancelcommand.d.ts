import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelCommandXAmzTargetEnum {
    AmazonSSMCancelCommand = "AmazonSSM.CancelCommand"
}
export declare class CancelCommandRequest extends SpeakeasyBase {
    cancelCommandRequest: shared.CancelCommandRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelCommandXAmzTargetEnum;
}
export declare class CancelCommandResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelCommandResult?: Record<string, any>;
    contentType: string;
    /**
     * DuplicateInstanceId
     */
    duplicateInstanceId?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidCommandId
     */
    invalidCommandId?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
