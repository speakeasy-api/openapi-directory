/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposCreateDeploymentRequestBody {
    /**
     * Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_merge")
    public Boolean autoMerge;

    public ReposCreateDeploymentRequestBody withAutoMerge(Boolean autoMerge) {
        this.autoMerge = autoMerge;
        return this;
    }
    
    /**
     * Short description of the deployment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public ReposCreateDeploymentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public String environment;

    public ReposCreateDeploymentRequestBody withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public Object payload;

    public ReposCreateDeploymentRequestBody withPayload(Object payload) {
        this.payload = payload;
        return this;
    }
    
    /**
     * Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.  
     * **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/enterprise-server@2.20/rest/overview/api-previews#enhanced-deployments) custom media type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("production_environment")
    public Boolean productionEnvironment;

    public ReposCreateDeploymentRequestBody withProductionEnvironment(Boolean productionEnvironment) {
        this.productionEnvironment = productionEnvironment;
        return this;
    }
    
    /**
     * The ref to deploy. This can be a branch, tag, or SHA.
     */
    @JsonProperty("ref")
    public String ref;

    public ReposCreateDeploymentRequestBody withRef(String ref) {
        this.ref = ref;
        return this;
    }
    
    /**
     * The [status](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_contexts")
    public String[] requiredContexts;

    public ReposCreateDeploymentRequestBody withRequiredContexts(String[] requiredContexts) {
        this.requiredContexts = requiredContexts;
        return this;
    }
    
    /**
     * Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public String task;

    public ReposCreateDeploymentRequestBody withTask(String task) {
        this.task = task;
        return this;
    }
    
    /**
     * Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`  
     * **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/enterprise-server@2.20/rest/overview/api-previews#enhanced-deployments) custom media type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transient_environment")
    public Boolean transientEnvironment;

    public ReposCreateDeploymentRequestBody withTransientEnvironment(Boolean transientEnvironment) {
        this.transientEnvironment = transientEnvironment;
        return this;
    }
    
    public ReposCreateDeploymentRequestBody(@JsonProperty("ref") String ref) {
        this.ref = ref;
  }
}
