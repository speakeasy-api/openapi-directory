import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTagsXAmzTargetEnum {
    AmazonML20141212DescribeTags = "AmazonML_20141212.DescribeTags"
}
export declare class DescribeTagsRequest extends SpeakeasyBase {
    describeTagsInput: shared.DescribeTagsInput;
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
    describeTagsOutput?: shared.DescribeTagsOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
