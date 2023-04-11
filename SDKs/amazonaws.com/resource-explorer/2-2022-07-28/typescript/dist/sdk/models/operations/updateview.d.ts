import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A search filter defines which resources can be part of a search query result set.
 */
export declare class UpdateViewRequestBodyFilters extends SpeakeasyBase {
    filterString?: string;
}
export declare class UpdateViewRequestBody extends SpeakeasyBase {
    /**
     * A search filter defines which resources can be part of a search query result set.
     */
    filters?: UpdateViewRequestBodyFilters;
    /**
     * <p>Specifies optional fields that you want included in search results from this view. It is a list of objects that each describe a field to include.</p> <p>The default is an empty list, with no optional fields included in the results.</p>
     */
    includedProperties?: shared.IncludedProperty[];
    /**
     * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want to modify.
     */
    viewArn: string;
}
export declare class UpdateViewRequest extends SpeakeasyBase {
    requestBody: UpdateViewRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateViewResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
     * Success
     */
    updateViewOutput?: shared.UpdateViewOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
