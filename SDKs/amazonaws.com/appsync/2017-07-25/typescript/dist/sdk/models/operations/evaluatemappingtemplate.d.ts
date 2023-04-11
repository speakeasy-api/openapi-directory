import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EvaluateMappingTemplateRequestBody extends SpeakeasyBase {
    /**
     * The map that holds all of the contextual information for your resolver invocation. A <code>context</code> is required for this action.
     */
    context: string;
    /**
     * The mapping template; this can be a request or response template. A <code>template</code> is required for this action.
     */
    template: string;
}
export declare class EvaluateMappingTemplateRequest extends SpeakeasyBase {
    requestBody: EvaluateMappingTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EvaluateMappingTemplateResponse extends SpeakeasyBase {
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
    evaluateMappingTemplateResponse?: shared.EvaluateMappingTemplateResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
