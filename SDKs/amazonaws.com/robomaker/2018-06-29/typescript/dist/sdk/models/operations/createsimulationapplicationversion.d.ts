import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSimulationApplicationVersionRequestBody extends SpeakeasyBase {
    /**
     * The application information for the simulation application.
     */
    application: string;
    /**
     * The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.
     */
    currentRevisionId?: string;
    /**
     * The SHA256 digest used to identify the Docker image URI used to created the simulation application.
     */
    imageDigest?: string;
    /**
     * The Amazon S3 eTag identifier for the zip file bundle that you use to create the simulation application.
     */
    s3Etags?: string[];
}
export declare class CreateSimulationApplicationVersionRequest extends SpeakeasyBase {
    requestBody: CreateSimulationApplicationVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSimulationApplicationVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSimulationApplicationVersionResponse?: shared.CreateSimulationApplicationVersionResponse;
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
