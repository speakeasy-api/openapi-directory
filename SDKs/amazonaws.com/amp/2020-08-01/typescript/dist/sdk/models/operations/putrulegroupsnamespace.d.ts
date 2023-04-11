import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRuleGroupsNamespaceRequestBody extends SpeakeasyBase {
    /**
     * An identifier used to ensure the idempotency of a write request.
     */
    clientToken?: string;
    /**
     * The rule groups namespace data.
     */
    data: string;
}
export declare class PutRuleGroupsNamespaceRequest extends SpeakeasyBase {
    requestBody: PutRuleGroupsNamespaceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The rule groups namespace name.
     */
    name: string;
    /**
     * The ID of the workspace in which to update the rule group namespace.
     */
    workspaceId: string;
}
export declare class PutRuleGroupsNamespaceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putRuleGroupsNamespaceResponse?: shared.PutRuleGroupsNamespaceResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
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
