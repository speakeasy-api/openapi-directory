package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs {
    @JsonProperty("key")
    public String key;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum scope;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs withScope(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum type;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs withType(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs withValue(String value) {
        this.value = value;
        return this;
    }
}