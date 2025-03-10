/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * App -  Represents the different branches of a repository for building, deploying, and hosting an Amplify app. 
 */
public class App {
    @JsonProperty("appArn")
    public String appArn;

    public App withAppArn(String appArn) {
        this.appArn = appArn;
        return this;
    }
    
    @JsonProperty("appId")
    public String appId;

    public App withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBranchCreationConfig")
    public AutoBranchCreationConfig autoBranchCreationConfig;

    public App withAutoBranchCreationConfig(AutoBranchCreationConfig autoBranchCreationConfig) {
        this.autoBranchCreationConfig = autoBranchCreationConfig;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoBranchCreationPatterns")
    public String[] autoBranchCreationPatterns;

    public App withAutoBranchCreationPatterns(String[] autoBranchCreationPatterns) {
        this.autoBranchCreationPatterns = autoBranchCreationPatterns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public String basicAuthCredentials;

    public App withBasicAuthCredentials(String basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildSpec")
    public String buildSpec;

    public App withBuildSpec(String buildSpec) {
        this.buildSpec = buildSpec;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createTime")
    public OffsetDateTime createTime;

    public App withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customHeaders")
    public String customHeaders;

    public App withCustomHeaders(String customHeaders) {
        this.customHeaders = customHeaders;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRules")
    public CustomRule[] customRules;

    public App withCustomRules(CustomRule[] customRules) {
        this.customRules = customRules;
        return this;
    }
    
    @JsonProperty("defaultDomain")
    public String defaultDomain;

    public App withDefaultDomain(String defaultDomain) {
        this.defaultDomain = defaultDomain;
        return this;
    }
    
    @JsonProperty("description")
    public String description;

    public App withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoBranchCreation")
    public Boolean enableAutoBranchCreation;

    public App withEnableAutoBranchCreation(Boolean enableAutoBranchCreation) {
        this.enableAutoBranchCreation = enableAutoBranchCreation;
        return this;
    }
    
    @JsonProperty("enableBasicAuth")
    public Boolean enableBasicAuth;

    public App withEnableBasicAuth(Boolean enableBasicAuth) {
        this.enableBasicAuth = enableBasicAuth;
        return this;
    }
    
    @JsonProperty("enableBranchAutoBuild")
    public Boolean enableBranchAutoBuild;

    public App withEnableBranchAutoBuild(Boolean enableBranchAutoBuild) {
        this.enableBranchAutoBuild = enableBranchAutoBuild;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableBranchAutoDeletion")
    public Boolean enableBranchAutoDeletion;

    public App withEnableBranchAutoDeletion(Boolean enableBranchAutoDeletion) {
        this.enableBranchAutoDeletion = enableBranchAutoDeletion;
        return this;
    }
    
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;

    public App withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamServiceRoleArn")
    public String iamServiceRoleArn;

    public App withIamServiceRoleArn(String iamServiceRoleArn) {
        this.iamServiceRoleArn = iamServiceRoleArn;
        return this;
    }
    
    @JsonProperty("name")
    public String name;

    public App withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonProperty("platform")
    public PlatformEnum platform;

    public App withPlatform(PlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productionBranch")
    public ProductionBranch productionBranch;

    public App withProductionBranch(ProductionBranch productionBranch) {
        this.productionBranch = productionBranch;
        return this;
    }
    
    @JsonProperty("repository")
    public String repository;

    public App withRepository(String repository) {
        this.repository = repository;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryCloneMethod")
    public RepositoryCloneMethodEnum repositoryCloneMethod;

    public App withRepositoryCloneMethod(RepositoryCloneMethodEnum repositoryCloneMethod) {
        this.repositoryCloneMethod = repositoryCloneMethod;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;

    public App withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updateTime")
    public OffsetDateTime updateTime;

    public App withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    
    public App(@JsonProperty("appArn") String appArn, @JsonProperty("appId") String appId, @JsonProperty("createTime") OffsetDateTime createTime, @JsonProperty("defaultDomain") String defaultDomain, @JsonProperty("description") String description, @JsonProperty("enableBasicAuth") Boolean enableBasicAuth, @JsonProperty("enableBranchAutoBuild") Boolean enableBranchAutoBuild, @JsonProperty("environmentVariables") java.util.Map<String, String> environmentVariables, @JsonProperty("name") String name, @JsonProperty("platform") PlatformEnum platform, @JsonProperty("repository") String repository, @JsonProperty("updateTime") OffsetDateTime updateTime) {
        this.appArn = appArn;
        this.appId = appId;
        this.createTime = createTime;
        this.defaultDomain = defaultDomain;
        this.description = description;
        this.enableBasicAuth = enableBasicAuth;
        this.enableBranchAutoBuild = enableBranchAutoBuild;
        this.environmentVariables = environmentVariables;
        this.name = name;
        this.platform = platform;
        this.repository = repository;
        this.updateTime = updateTime;
  }
}
