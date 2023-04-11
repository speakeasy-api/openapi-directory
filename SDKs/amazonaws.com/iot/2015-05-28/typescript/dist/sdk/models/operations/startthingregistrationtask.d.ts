import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartThingRegistrationTaskRequestBody extends SpeakeasyBase {
    /**
     * The S3 bucket that contains the input file.
     */
    inputFileBucket: string;
    /**
     * The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).
     */
    inputFileKey: string;
    /**
     * The IAM role ARN that grants permission the input file.
     */
    roleArn: string;
    /**
     * The provisioning template.
     */
    templateBody: string;
}
export declare class StartThingRegistrationTaskRequest extends SpeakeasyBase {
    requestBody: StartThingRegistrationTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartThingRegistrationTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    startThingRegistrationTaskResponse?: shared.StartThingRegistrationTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
