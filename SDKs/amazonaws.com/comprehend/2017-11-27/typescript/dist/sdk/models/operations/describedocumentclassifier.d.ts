import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDocumentClassifierXAmzTargetEnum {
    Comprehend20171127DescribeDocumentClassifier = "Comprehend_20171127.DescribeDocumentClassifier"
}
export declare class DescribeDocumentClassifierRequest extends SpeakeasyBase {
    describeDocumentClassifierRequest: shared.DescribeDocumentClassifierRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDocumentClassifierXAmzTargetEnum;
}
export declare class DescribeDocumentClassifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDocumentClassifierResponse?: shared.DescribeDocumentClassifierResponse;
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
