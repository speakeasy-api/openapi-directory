import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListIntegrationsRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
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
     * The pagination token from the previous ListIntegrations API call.
     */
    nextToken?: string;
}
export declare class ListIntegrationsResponse extends SpeakeasyBase {
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
    listIntegrationsResponse?: shared.ListIntegrationsResponse;
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
