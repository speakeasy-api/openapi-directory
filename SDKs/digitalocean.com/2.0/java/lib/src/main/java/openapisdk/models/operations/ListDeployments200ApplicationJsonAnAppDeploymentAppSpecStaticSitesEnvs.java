package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs {
    @JsonProperty("key")
    public String key;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum scope;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs withScope(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum type;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs withType(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs withValue(String value) {
        this.value = value;
        return this;
    }
}