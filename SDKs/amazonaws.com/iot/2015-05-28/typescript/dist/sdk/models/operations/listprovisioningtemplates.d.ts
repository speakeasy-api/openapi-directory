import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListProvisioningTemplatesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     * A token to retrieve the next set of results.
     */
    nextToken?: string;
}
export declare class ListProvisioningTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listProvisioningTemplatesResponse?: shared.ListProvisioningTemplatesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
