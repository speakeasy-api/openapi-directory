package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchOrganizationRequestBodySupportChat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PatchOrganizationRequestBodySupportChat withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PatchOrganizationRequestBodySupportChat withValue(String value) {
        this.value = value;
        return this;
    }
}