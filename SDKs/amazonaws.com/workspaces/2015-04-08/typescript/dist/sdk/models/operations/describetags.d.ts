import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTagsXAmzTargetEnum {
    WorkspacesServiceDescribeTags = "WorkspacesService.DescribeTags"
}
export declare class DescribeTagsRequest extends SpeakeasyBase {
    describeTagsRequest: shared.DescribeTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTagsXAmzTargetEnum;
}
export declare class DescribeTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTagsResult?: shared.DescribeTagsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
