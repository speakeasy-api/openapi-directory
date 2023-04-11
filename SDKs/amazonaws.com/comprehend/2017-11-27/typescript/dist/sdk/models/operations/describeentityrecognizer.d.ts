import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEntityRecognizerXAmzTargetEnum {
    Comprehend20171127DescribeEntityRecognizer = "Comprehend_20171127.DescribeEntityRecognizer"
}
export declare class DescribeEntityRecognizerRequest extends SpeakeasyBase {
    describeEntityRecognizerRequest: shared.DescribeEntityRecognizerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEntityRecognizerXAmzTargetEnum;
}
export declare class DescribeEntityRecognizerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEntityRecognizerResponse?: shared.DescribeEntityRecognizerResponse;
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
