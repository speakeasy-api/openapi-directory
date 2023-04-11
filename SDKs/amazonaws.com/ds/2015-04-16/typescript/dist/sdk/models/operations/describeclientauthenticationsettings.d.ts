import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeClientAuthenticationSettingsXAmzTargetEnum {
    DirectoryService20150416DescribeClientAuthenticationSettings = "DirectoryService_20150416.DescribeClientAuthenticationSettings"
}
export declare class DescribeClientAuthenticationSettingsRequest extends SpeakeasyBase {
    describeClientAuthenticationSettingsRequest: shared.DescribeClientAuthenticationSettingsRequest;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClientAuthenticationSettingsXAmzTargetEnum;
}
export declare class DescribeClientAuthenticationSettingsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeClientAuthenticationSettingsResult?: shared.DescribeClientAuthenticationSettingsResult;
    /**
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
