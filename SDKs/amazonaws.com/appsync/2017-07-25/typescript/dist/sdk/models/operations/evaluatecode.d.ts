import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
 */
export declare class EvaluateCodeRequestBodyRuntime extends SpeakeasyBase {
    name?: shared.RuntimeNameEnum;
    runtimeVersion?: string;
}
export declare class EvaluateCodeRequestBody extends SpeakeasyBase {
    /**
     * The code definition to be evaluated. Note that <code>code</code> and <code>runtime</code> are both required for this action. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
     */
    code: string;
    /**
     * The map that holds all of the contextual information for your resolver invocation. A <code>context</code> is required for this action.
     */
    context: string;
    /**
     * The function within the code to be evaluated. If provided, the valid values are <code>request</code> and <code>response</code>.
     */
    function?: string;
    /**
     * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     */
    runtime: EvaluateCodeRequestBodyRuntime;
}
export declare class EvaluateCodeRequest extends SpeakeasyBase {
    requestBody: EvaluateCodeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EvaluateCodeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    evaluateCodeResponse?: shared.EvaluateCodeResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
