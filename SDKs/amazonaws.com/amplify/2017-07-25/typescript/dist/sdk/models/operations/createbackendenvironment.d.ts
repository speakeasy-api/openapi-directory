import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateBackendEnvironmentRequestBody extends SpeakeasyBase {
    /**
     *  The name of deployment artifacts.
     */
    deploymentArtifacts?: string;
    /**
     *  The name for the backend environment.
     */
    environmentName: string;
    /**
     *  The AWS CloudFormation stack name of a backend environment.
     */
    stackName?: string;
}
export declare class CreateBackendEnvironmentRequest extends SpeakeasyBase {
    requestBody: CreateBackendEnvironmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique ID for an Amplify app.
     */
    appId: string;
}
export declare class CreateBackendEnvironmentResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createBackendEnvironmentResult?: shared.CreateBackendEnvironmentResult;
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
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
