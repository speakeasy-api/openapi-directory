import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRuleGroupsNamespaceRequestBody extends SpeakeasyBase {
    /**
     * An identifier used to ensure the idempotency of a write request.
     */
    clientToken?: string;
    /**
     * The rule groups namespace data.
     */
    data: string;
    /**
     * The namespace name that the rule group belong to.
     */
    name: string;
    /**
     * The list of tags assigned to the resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateRuleGroupsNamespaceRequest extends SpeakeasyBase {
    requestBody: CreateRuleGroupsNamespaceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace in which to create the rule group namespace.
     */
    workspaceId: string;
}
export declare class CreateRuleGroupsNamespaceResponse extends SpeakeasyBase {
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
     * Success
     */
    createRuleGroupsNamespaceResponse?: shared.CreateRuleGroupsNamespaceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
