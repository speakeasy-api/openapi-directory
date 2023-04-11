import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTextTranslationJobXAmzTargetEnum {
    AWSShineFrontendService20170701DescribeTextTranslationJob = "AWSShineFrontendService_20170701.DescribeTextTranslationJob"
}
export declare class DescribeTextTranslationJobRequest extends SpeakeasyBase {
    describeTextTranslationJobRequest: shared.DescribeTextTranslationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTextTranslationJobXAmzTargetEnum;
}
export declare class DescribeTextTranslationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTextTranslationJobResponse?: shared.DescribeTextTranslationJobResponse;
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
