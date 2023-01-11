package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimEnterpriseUserGroups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ScimEnterpriseUserGroups withValue(String value) {
        this.value = value;
        return this;
    }
}