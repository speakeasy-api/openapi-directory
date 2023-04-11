import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLanguageModelXAmzTargetEnum {
    TranscribeDescribeLanguageModel = "Transcribe.DescribeLanguageModel"
}
export declare class DescribeLanguageModelRequest extends SpeakeasyBase {
    describeLanguageModelRequest: shared.DescribeLanguageModelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLanguageModelXAmzTargetEnum;
}
export declare class DescribeLanguageModelResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    describeLanguageModelResponse?: shared.DescribeLanguageModelResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
