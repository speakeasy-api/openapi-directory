import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDocumentClassificationJobXAmzTargetEnum {
    Comprehend20171127DescribeDocumentClassificationJob = "Comprehend_20171127.DescribeDocumentClassificationJob"
}
export declare class DescribeDocumentClassificationJobRequest extends SpeakeasyBase {
    describeDocumentClassificationJobRequest: shared.DescribeDocumentClassificationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDocumentClassificationJobXAmzTargetEnum;
}
export declare class DescribeDocumentClassificationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDocumentClassificationJobResponse?: shared.DescribeDocumentClassificationJobResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * JobNotFoundException
     */
    jobNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
