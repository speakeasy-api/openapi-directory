import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestRoleRequestBody extends SpeakeasyBase {
    /**
     * The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.
     */
    inputBucket: string;
    /**
     * The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.
     */
    outputBucket: string;
    /**
     * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.
     */
    role: string;
    /**
     * The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.
     */
    topics: string[];
}
export declare class TestRoleRequest extends SpeakeasyBase {
    requestBody: TestRoleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestRoleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * IncompatibleVersionException
     */
    incompatibleVersionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    testRoleResponse?: shared.TestRoleResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
