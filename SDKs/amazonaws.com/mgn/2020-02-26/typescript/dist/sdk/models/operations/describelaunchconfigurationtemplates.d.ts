import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeLaunchConfigurationTemplatesRequestBody extends SpeakeasyBase {
    /**
     * Request to filter Launch Configuration Templates list by Launch Configuration Template ID.
     */
    launchConfigurationTemplateIDs?: string[];
    /**
     * Maximum results to be returned in DescribeLaunchConfigurationTemplates.
     */
    maxResults?: number;
    /**
     * Next pagination token returned from DescribeLaunchConfigurationTemplates.
     */
    nextToken?: string;
}
export declare class DescribeLaunchConfigurationTemplatesRequest extends SpeakeasyBase {
    requestBody: DescribeLaunchConfigurationTemplatesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeLaunchConfigurationTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLaunchConfigurationTemplatesResponse?: shared.DescribeLaunchConfigurationTemplatesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
