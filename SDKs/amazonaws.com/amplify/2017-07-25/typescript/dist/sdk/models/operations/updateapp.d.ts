import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Describes the automated branch creation configuration.
 */
export declare class UpdateAppRequestBodyAutoBranchCreationConfig extends SpeakeasyBase {
    basicAuthCredentials?: string;
    buildSpec?: string;
    enableAutoBuild?: boolean;
    enableBasicAuth?: boolean;
    enablePerformanceMode?: boolean;
    enablePullRequestPreview?: boolean;
    environmentVariables?: Record<string, string>;
    framework?: string;
    pullRequestEnvironmentName?: string;
    stage?: shared.StageEnum;
}
/**
 *  The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.
 */
export declare enum UpdateAppRequestBodyPlatformEnum {
    Web = "WEB",
    WebDynamic = "WEB_DYNAMIC",
    WebCompute = "WEB_COMPUTE"
}
export declare class UpdateAppRequestBody extends SpeakeasyBase {
    /**
     * <p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
     */
    accessToken?: string;
    /**
     *  Describes the automated branch creation configuration.
     */
    autoBranchCreationConfig?: UpdateAppRequestBodyAutoBranchCreationConfig;
    /**
     *  Describes the automated branch creation glob patterns for an Amplify app.
     */
    autoBranchCreationPatterns?: string[];
    /**
     *  The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
     */
    basicAuthCredentials?: string;
    /**
     *  The build specification (build spec) file for an Amplify app build.
     */
    buildSpec?: string;
    /**
     * The custom HTTP headers for an Amplify app.
     */
    customHeaders?: string;
    /**
     *  The custom redirect and rewrite rules for an Amplify app.
     */
    customRules?: shared.CustomRule[];
    /**
     *  The description for an Amplify app.
     */
    description?: string;
    /**
     *  Enables automated branch creation for an Amplify app.
     */
    enableAutoBranchCreation?: boolean;
    /**
     *  Enables basic authorization for an Amplify app.
     */
    enableBasicAuth?: boolean;
    /**
     *  Enables branch auto-building for an Amplify app.
     */
    enableBranchAutoBuild?: boolean;
    /**
     *  Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.
     */
    enableBranchAutoDeletion?: boolean;
    /**
     *  The environment variables for an Amplify app.
     */
    environmentVariables?: Record<string, string>;
    /**
     *  The AWS Identity and Access Management (IAM) service role for an Amplify app.
     */
    iamServiceRoleArn?: string;
    /**
     *  The name for an Amplify app.
     */
    name?: string;
    /**
     * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit.</p> <p>To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
     */
    oauthToken?: string;
    /**
     *  The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.
     */
    platform?: UpdateAppRequestBodyPlatformEnum;
    /**
     *  The name of the repository for an Amplify app
     */
    repository?: string;
}
export declare class UpdateAppRequest extends SpeakeasyBase {
    requestBody: UpdateAppRequestBody;
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
export declare class UpdateAppResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
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
    updateAppResult?: shared.UpdateAppResult;
}
