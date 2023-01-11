package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs {
    @JsonProperty("key")
    public String key;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum scope;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs withScope(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum type;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs withType(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs withValue(String value) {
        this.value = value;
        return this;
    }
}