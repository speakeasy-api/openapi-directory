import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDatasetExportJobXAmzTargetEnum {
    AmazonPersonalizeDescribeDatasetExportJob = "AmazonPersonalize.DescribeDatasetExportJob"
}
export declare class DescribeDatasetExportJobRequest extends SpeakeasyBase {
    describeDatasetExportJobRequest: shared.DescribeDatasetExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetExportJobXAmzTargetEnum;
}
export declare class DescribeDatasetExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDatasetExportJobResponse?: shared.DescribeDatasetExportJobResponse;
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
