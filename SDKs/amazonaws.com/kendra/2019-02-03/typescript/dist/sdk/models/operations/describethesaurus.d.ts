import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeThesaurusXAmzTargetEnum {
    AWSKendraFrontendServiceDescribeThesaurus = "AWSKendraFrontendService.DescribeThesaurus"
}
export declare class DescribeThesaurusRequest extends SpeakeasyBase {
    describeThesaurusRequest: shared.DescribeThesaurusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeThesaurusXAmzTargetEnum;
}
export declare class DescribeThesaurusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeThesaurusResponse?: shared.DescribeThesaurusResponse;
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
