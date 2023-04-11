import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset, _case and _order.
 */
export declare class ListProfileObjectsRequestBodyObjectFilter extends SpeakeasyBase {
    keyName?: string;
    values?: string[];
}
export declare class ListProfileObjectsRequestBody extends SpeakeasyBase {
    /**
     * The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset, _case and _order.
     */
    objectFilter?: ListProfileObjectsRequestBodyObjectFilter;
    /**
     * The name of the profile object type.
     */
    objectTypeName: string;
    /**
     * The unique identifier of a customer profile.
     */
    profileId: string;
}
export declare class ListProfileObjectsRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: ListProfileObjectsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of objects returned per page.
     */
    maxResults?: number;
    /**
     * The pagination token from the previous call to ListProfileObjects.
     */
    nextToken?: string;
}
export declare class ListProfileObjectsResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listProfileObjectsResponse?: shared.ListProfileObjectsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
