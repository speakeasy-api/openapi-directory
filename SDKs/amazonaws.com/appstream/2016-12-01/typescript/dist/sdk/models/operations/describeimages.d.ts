import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImagesXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeImages = "PhotonAdminProxyService.DescribeImages"
}
export declare class DescribeImagesRequest extends SpeakeasyBase {
    describeImagesRequest: shared.DescribeImagesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
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
    xAmzTarget: DescribeImagesXAmzTargetEnum;
}
export declare class DescribeImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImagesResult?: shared.DescribeImagesResult;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
