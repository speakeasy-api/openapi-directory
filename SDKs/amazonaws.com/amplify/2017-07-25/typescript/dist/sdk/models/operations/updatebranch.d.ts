import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Describes the current stage for the branch.
 */
export declare enum UpdateBranchRequestBodyStageEnum {
    Production = "PRODUCTION",
    Beta = "BETA",
    Development = "DEVELOPMENT",
    Experimental = "EXPERIMENTAL",
    PullRequest = "PULL_REQUEST"
}
export declare class UpdateBranchRequestBody extends SpeakeasyBase {
    /**
     *  The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.
     */
    backendEnvironmentArn?: string;
    /**
     *  The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
     */
    basicAuthCredentials?: string;
    /**
     *  The build specification (build spec) file for an Amplify app build.
     */
    buildSpec?: string;
    /**
     *  The description for the branch.
     */
    description?: string;
    /**
     *  The display name for a branch. This is used as the default domain prefix.
     */
    displayName?: string;
    /**
     *  Enables auto building for the branch.
     */
    enableAutoBuild?: boolean;
    /**
     *  Enables basic authorization for the branch.
     */
    enableBasicAuth?: boolean;
    /**
     *  Enables notifications for the branch.
     */
    enableNotification?: boolean;
    /**
     * <p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>
     */
    enablePerformanceMode?: boolean;
    /**
     *  Enables pull request previews for this branch.
     */
    enablePullRequestPreview?: boolean;
    /**
     *  The environment variables for the branch.
     */
    environmentVariables?: Record<string, string>;
    /**
     *  The framework for the branch.
     */
    framework?: string;
    /**
     *  The Amplify environment name for the pull request.
     */
    pullRequestEnvironmentName?: string;
    /**
     *  Describes the current stage for the branch.
     */
    stage?: UpdateBranchRequestBodyStageEnum;
    /**
     *  The content Time to Live (TTL) for the website in seconds.
     */
    ttl?: string;
}
export declare class UpdateBranchRequest extends SpeakeasyBase {
    requestBody: UpdateBranchRequestBody;
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
    /**
     *  The name for the branch.
     */
    branchName: string;
}
export declare class UpdateBranchResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * DependentServiceFailureException
     */
    dependentServiceFailureException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
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
    /**
     * Success
     */
    updateBranchResult?: shared.UpdateBranchResult;
}
