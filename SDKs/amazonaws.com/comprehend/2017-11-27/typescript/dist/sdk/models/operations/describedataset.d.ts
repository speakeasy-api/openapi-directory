import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDatasetXAmzTargetEnum {
    Comprehend20171127DescribeDataset = "Comprehend_20171127.DescribeDataset"
}
export declare class DescribeDatasetRequest extends SpeakeasyBase {
    describeDatasetRequest: shared.DescribeDatasetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetXAmzTargetEnum;
}
export declare class DescribeDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDatasetResponse?: shared.DescribeDatasetResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
