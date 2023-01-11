package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs {
    @JsonProperty("key")
    public String key;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum scope;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs withScope(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum type;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs withType(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs withValue(String value) {
        this.value = value;
        return this;
    }
}