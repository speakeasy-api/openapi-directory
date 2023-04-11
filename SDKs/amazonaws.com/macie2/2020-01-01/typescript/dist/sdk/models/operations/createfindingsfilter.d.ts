import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:
 */
export declare enum CreateFindingsFilterRequestBodyActionEnum {
    Archive = "ARCHIVE",
    Noop = "NOOP"
}
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
 */
export declare class CreateFindingsFilterRequestBodyFindingCriteria extends SpeakeasyBase {
    criterion?: Record<string, shared.CriterionAdditionalProperties>;
}
export declare class CreateFindingsFilterRequestBody extends SpeakeasyBase {
    /**
     * The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:
     */
    action: CreateFindingsFilterRequestBodyActionEnum;
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken?: string;
    /**
     * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
     */
    description?: string;
    /**
     * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
     */
    findingCriteria: CreateFindingsFilterRequestBodyFindingCriteria;
    /**
     * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
     */
    name: string;
    /**
     * The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
     */
    position?: number;
    /**
     * A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateFindingsFilterRequest extends SpeakeasyBase {
    requestBody: CreateFindingsFilterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFindingsFilterResponse extends SpeakeasyBase {
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
    createFindingsFilterResponse?: shared.CreateFindingsFilterResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
