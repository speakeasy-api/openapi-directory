package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ComponentDeploymentSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersion")
    public String componentVersion;
    public ComponentDeploymentSpecification withComponentVersion(String componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationUpdate")
    public ComponentConfigurationUpdate configurationUpdate;
    public ComponentDeploymentSpecification withConfigurationUpdate(ComponentConfigurationUpdate configurationUpdate) {
        this.configurationUpdate = configurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runWith")
    public ComponentRunWith runWith;
    public ComponentDeploymentSpecification withRunWith(ComponentRunWith runWith) {
        this.runWith = runWith;
        return this;
    }
}