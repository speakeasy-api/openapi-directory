import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:
 */
export declare enum UpdateFindingsFilterRequestBodyActionEnum {
    Archive = "ARCHIVE",
    Noop = "NOOP"
}
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
 */
export declare class UpdateFindingsFilterRequestBodyFindingCriteria extends SpeakeasyBase {
    criterion?: Record<string, shared.CriterionAdditionalProperties>;
}
export declare class UpdateFindingsFilterRequestBody extends SpeakeasyBase {
    /**
     * The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:
     */
    action?: UpdateFindingsFilterRequestBodyActionEnum;
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
    findingCriteria?: UpdateFindingsFilterRequestBodyFindingCriteria;
    /**
     * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
     */
    name?: string;
    /**
     * The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
     */
    position?: number;
}
export declare class UpdateFindingsFilterRequest extends SpeakeasyBase {
    requestBody: UpdateFindingsFilterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the Amazon Macie resource that the request applies to.
     */
    id: string;
}
export declare class UpdateFindingsFilterResponse extends SpeakeasyBase {
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
     * Success
     */
    updateFindingsFilterResponse?: shared.UpdateFindingsFilterResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
