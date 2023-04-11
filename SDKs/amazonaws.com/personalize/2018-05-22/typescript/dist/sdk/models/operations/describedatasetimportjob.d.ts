import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDatasetImportJobXAmzTargetEnum {
    AmazonPersonalizeDescribeDatasetImportJob = "AmazonPersonalize.DescribeDatasetImportJob"
}
export declare class DescribeDatasetImportJobRequest extends SpeakeasyBase {
    describeDatasetImportJobRequest: shared.DescribeDatasetImportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetImportJobXAmzTargetEnum;
}
export declare class DescribeDatasetImportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDatasetImportJobResponse?: shared.DescribeDatasetImportJobResponse;
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
