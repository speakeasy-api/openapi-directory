package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimSetInformationForProvisionedUserRequestBodyEmails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public ScimSetInformationForProvisionedUserRequestBodyEmails withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ScimSetInformationForProvisionedUserRequestBodyEmails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public ScimSetInformationForProvisionedUserRequestBodyEmails withValue(String value) {
        this.value = value;
        return this;
    }
}