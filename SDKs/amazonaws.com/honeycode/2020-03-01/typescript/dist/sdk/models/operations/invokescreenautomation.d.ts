import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvokeScreenAutomationRequestBody extends SpeakeasyBase {
    /**
     * <p> The request token for performing the automation action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will return the response of the previous call rather than performing the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
     */
    clientRequestToken?: string;
    /**
     *  The row ID for the automation if the automation is defined inside a block with source or list.
     */
    rowId?: string;
    /**
     *  Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. Any variables defined in a screen are required to be passed in the call.
     */
    variables?: Record<string, shared.VariableValue>;
}
export declare class InvokeScreenAutomationRequest extends SpeakeasyBase {
    requestBody: InvokeScreenAutomationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the app that contains the screen automation.
     */
    appId: string;
    /**
     * The ID of the automation action to be performed.
     */
    automationId: string;
    /**
     * The ID of the screen that contains the screen automation.
     */
    screenId: string;
    /**
     * The ID of the workbook that contains the screen automation.
     */
    workbookId: string;
}
export declare class InvokeScreenAutomationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AutomationExecutionException
     */
    automationExecutionException?: any;
    /**
     * AutomationExecutionTimeoutException
     */
    automationExecutionTimeoutException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    invokeScreenAutomationResult?: shared.InvokeScreenAutomationResult;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
