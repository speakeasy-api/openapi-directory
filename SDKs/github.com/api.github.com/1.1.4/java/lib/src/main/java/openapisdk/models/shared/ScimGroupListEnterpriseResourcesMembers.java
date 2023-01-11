package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimGroupListEnterpriseResourcesMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("$ref")
    public String dollarRef;
    public ScimGroupListEnterpriseResourcesMembers withDollarRef(String dollarRef) {
        this.dollarRef = dollarRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display")
    public String display;
    public ScimGroupListEnterpriseResourcesMembers withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ScimGroupListEnterpriseResourcesMembers withValue(String value) {
        this.value = value;
        return this;
    }
}