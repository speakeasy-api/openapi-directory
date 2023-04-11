import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAccountIntegrationsRequestBody extends SpeakeasyBase {
    /**
     * The URI of the S3 bucket or any other type of data source.
     */
    uri: string;
}
export declare class ListAccountIntegrationsRequest extends SpeakeasyBase {
    requestBody: ListAccountIntegrationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.
     */
    includeHidden?: boolean;
    /**
     * The maximum number of objects returned per page.
     */
    maxResults?: number;
    /**
     * The pagination token from the previous ListAccountIntegrations API call.
     */
    nextToken?: string;
}
export declare class ListAccountIntegrationsResponse extends SpeakeasyBase {
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
    listAccountIntegrationsResponse?: shared.ListAccountIntegrationsResponse;
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
