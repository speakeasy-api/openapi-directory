package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemediationParameterValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceValue")
    public ResourceValue resourceValue;
    public RemediationParameterValue withResourceValue(ResourceValue resourceValue) {
        this.resourceValue = resourceValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StaticValue")
    public StaticValue staticValue;
    public RemediationParameterValue withStaticValue(StaticValue staticValue) {
        this.staticValue = staticValue;
        return this;
    }
}