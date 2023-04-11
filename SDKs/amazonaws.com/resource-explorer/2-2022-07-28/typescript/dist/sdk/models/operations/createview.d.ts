import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A search filter defines which resources can be part of a search query result set.
 */
export declare class CreateViewRequestBodyFilters extends SpeakeasyBase {
    filterString?: string;
}
export declare class CreateViewRequestBody extends SpeakeasyBase {
    /**
     * This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type value</a> to ensure the uniqueness of your views.
     */
    clientToken?: string;
    /**
     * A search filter defines which resources can be part of a search query result set.
     */
    filters?: CreateViewRequestBodyFilters;
    /**
     * <p>Specifies optional fields that you want included in search results from this view. It is a list of objects that each describe a field to include.</p> <p>The default is an empty list, with no optional fields included in the results.</p>
     */
    includedProperties?: shared.IncludedProperty[];
    /**
     * Tag key and value pairs that are attached to the view.
     */
    tags?: Record<string, string>;
    /**
     * <p>The name of the new view. This name appears in the list of views in Resource Explorer.</p> <p>The name must be no more than 64 characters long, and can include letters, digits, and the dash (-) character. The name must be unique within its Amazon Web Services Region.</p>
     */
    viewName: string;
}
export declare class CreateViewRequest extends SpeakeasyBase {
    requestBody: CreateViewRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateViewResponse extends SpeakeasyBase {
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
    createViewOutput?: shared.CreateViewOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
