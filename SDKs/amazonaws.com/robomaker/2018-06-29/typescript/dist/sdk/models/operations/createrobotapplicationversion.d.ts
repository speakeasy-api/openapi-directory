import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRobotApplicationVersionRequestBody extends SpeakeasyBase {
    /**
     * The application information for the robot application.
     */
    application: string;
    /**
     * The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
     */
    currentRevisionId?: string;
    /**
     * A SHA256 identifier for the Docker image that you use for your robot application.
     */
    imageDigest?: string;
    /**
     * The Amazon S3 identifier for the zip file bundle that you use for your robot application.
     */
    s3Etags?: string[];
}
export declare class CreateRobotApplicationVersionRequest extends SpeakeasyBase {
    requestBody: CreateRobotApplicationVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRobotApplicationVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRobotApplicationVersionResponse?: shared.CreateRobotApplicationVersionResponse;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
