import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCommandInvocationXAmzTargetEnum {
    AmazonSSMGetCommandInvocation = "AmazonSSM.GetCommandInvocation"
}
export declare class GetCommandInvocationRequest extends SpeakeasyBase {
    getCommandInvocationRequest: shared.GetCommandInvocationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommandInvocationXAmzTargetEnum;
}
export declare class GetCommandInvocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCommandInvocationResult?: shared.GetCommandInvocationResult;
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
    /**
     * InvalidPluginName
     */
    invalidPluginName?: any;
    /**
     * InvocationDoesNotExist
     */
    invocationDoesNotExist?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
