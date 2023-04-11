import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDataIngestionJobXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceDescribeDataIngestionJob = "AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob"
}
export declare class DescribeDataIngestionJobRequest extends SpeakeasyBase {
    describeDataIngestionJobRequest: shared.DescribeDataIngestionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDataIngestionJobXAmzTargetEnum;
}
export declare class DescribeDataIngestionJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeDataIngestionJobResponse?: shared.DescribeDataIngestionJobResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
