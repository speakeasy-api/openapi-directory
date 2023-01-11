package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateDeploymentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_merge")
    public Boolean autoMerge;
    public ReposCreateDeploymentRequestBody withAutoMerge(Boolean autoMerge) {
        this.autoMerge = autoMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public ReposCreateDeploymentRequestBody withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReposCreateDeploymentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("production_environment")
    public Boolean productionEnvironment;
    public ReposCreateDeploymentRequestBody withProductionEnvironment(Boolean productionEnvironment) {
        this.productionEnvironment = productionEnvironment;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public ReposCreateDeploymentRequestBody withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_contexts")
    public String[] requiredContexts;
    public ReposCreateDeploymentRequestBody withRequiredContexts(String[] requiredContexts) {
        this.requiredContexts = requiredContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public String task;
    public ReposCreateDeploymentRequestBody withTask(String task) {
        this.task = task;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transient_environment")
    public Boolean transientEnvironment;
    public ReposCreateDeploymentRequestBody withTransientEnvironment(Boolean transientEnvironment) {
        this.transientEnvironment = transientEnvironment;
        return this;
    }
}