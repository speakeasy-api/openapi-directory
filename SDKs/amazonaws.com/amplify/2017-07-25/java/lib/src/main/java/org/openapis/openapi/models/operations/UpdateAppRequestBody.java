/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAppRequestBody {
    /**
     * &lt;p&gt;The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.&lt;/p&gt; &lt;p&gt;Use &lt;code&gt;accessToken&lt;/code&gt; for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use &lt;code&gt;oauthToken&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;You must specify either &lt;code&gt;accessToken&lt;/code&gt; or &lt;code&gt;oauthToken&lt;/code&gt; when you update an app.&lt;/p&gt; &lt;p&gt;Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see &lt;a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth"&gt;Migrating an existing OAuth app to the Amplify GitHub App&lt;/a&gt; in the &lt;i&gt;Amplify User Guide&lt;/i&gt; .&lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;

    public UpdateAppRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     *  Describes the automated branch creation configuration. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBranchCreationConfig")
    public UpdateAppRequestBodyAutoBranchCreationConfig autoBranchCreationConfig;

    public UpdateAppRequestBody withAutoBranchCreationConfig(UpdateAppRequestBodyAutoBranchCreationConfig autoBranchCreationConfig) {
        this.autoBranchCreationConfig = autoBranchCreationConfig;
        return this;
    }
    
    /**
     *  Describes the automated branch creation glob patterns for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBranchCreationPatterns")
    public String[] autoBranchCreationPatterns;

    public UpdateAppRequestBody withAutoBranchCreationPatterns(String[] autoBranchCreationPatterns) {
        this.autoBranchCreationPatterns = autoBranchCreationPatterns;
        return this;
    }
    
    /**
     *  The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format &lt;code&gt;user:password&lt;/code&gt;.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public String basicAuthCredentials;

    public UpdateAppRequestBody withBasicAuthCredentials(String basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    
    /**
     *  The build specification (build spec) file for an Amplify app build. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildSpec")
    public String buildSpec;

    public UpdateAppRequestBody withBuildSpec(String buildSpec) {
        this.buildSpec = buildSpec;
        return this;
    }
    
    /**
     * The custom HTTP headers for an Amplify app.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customHeaders")
    public String customHeaders;

    public UpdateAppRequestBody withCustomHeaders(String customHeaders) {
        this.customHeaders = customHeaders;
        return this;
    }
    
    /**
     *  The custom redirect and rewrite rules for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRules")
    public org.openapis.openapi.models.shared.CustomRule[] customRules;

    public UpdateAppRequestBody withCustomRules(org.openapis.openapi.models.shared.CustomRule[] customRules) {
        this.customRules = customRules;
        return this;
    }
    
    /**
     *  The description for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public UpdateAppRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     *  Enables automated branch creation for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoBranchCreation")
    public Boolean enableAutoBranchCreation;

    public UpdateAppRequestBody withEnableAutoBranchCreation(Boolean enableAutoBranchCreation) {
        this.enableAutoBranchCreation = enableAutoBranchCreation;
        return this;
    }
    
    /**
     *  Enables basic authorization for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBasicAuth")
    public Boolean enableBasicAuth;

    public UpdateAppRequestBody withEnableBasicAuth(Boolean enableBasicAuth) {
        this.enableBasicAuth = enableBasicAuth;
        return this;
    }
    
    /**
     *  Enables branch auto-building for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBranchAutoBuild")
    public Boolean enableBranchAutoBuild;

    public UpdateAppRequestBody withEnableBranchAutoBuild(Boolean enableBranchAutoBuild) {
        this.enableBranchAutoBuild = enableBranchAutoBuild;
        return this;
    }
    
    /**
     *  Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBranchAutoDeletion")
    public Boolean enableBranchAutoDeletion;

    public UpdateAppRequestBody withEnableBranchAutoDeletion(Boolean enableBranchAutoDeletion) {
        this.enableBranchAutoDeletion = enableBranchAutoDeletion;
        return this;
    }
    
    /**
     *  The environment variables for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;

    public UpdateAppRequestBody withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    
    /**
     *  The AWS Identity and Access Management (IAM) service role for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamServiceRoleArn")
    public String iamServiceRoleArn;

    public UpdateAppRequestBody withIamServiceRoleArn(String iamServiceRoleArn) {
        this.iamServiceRoleArn = iamServiceRoleArn;
        return this;
    }
    
    /**
     *  The name for an Amplify app. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public UpdateAppRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * &lt;p&gt;The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.&lt;/p&gt; &lt;p&gt;Use &lt;code&gt;oauthToken&lt;/code&gt; for repository providers other than GitHub, such as Bitbucket or CodeCommit.&lt;/p&gt; &lt;p&gt;To authorize access to GitHub as your repository provider, use &lt;code&gt;accessToken&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;You must specify either &lt;code&gt;oauthToken&lt;/code&gt; or &lt;code&gt;accessToken&lt;/code&gt; when you update an app.&lt;/p&gt; &lt;p&gt;Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see &lt;a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth"&gt;Migrating an existing OAuth app to the Amplify GitHub App&lt;/a&gt; in the &lt;i&gt;Amplify User Guide&lt;/i&gt; .&lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthToken")
    public String oauthToken;

    public UpdateAppRequestBody withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     *  The platform for the Amplify app. For a static app, set the platform type to &lt;code&gt;WEB&lt;/code&gt;. For a dynamic server-side rendered (SSR) app, set the platform type to &lt;code&gt;WEB_COMPUTE&lt;/code&gt;. For an app requiring Amplify Hosting's original SSR support only, set the platform type to &lt;code&gt;WEB_DYNAMIC&lt;/code&gt;.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public UpdateAppRequestBodyPlatformEnum platform;

    public UpdateAppRequestBody withPlatform(UpdateAppRequestBodyPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    
    /**
     *  The name of the repository for an Amplify app 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public String repository;

    public UpdateAppRequestBody withRepository(String repository) {
        this.repository = repository;
        return this;
    }
    
    public UpdateAppRequestBody(){}
}
