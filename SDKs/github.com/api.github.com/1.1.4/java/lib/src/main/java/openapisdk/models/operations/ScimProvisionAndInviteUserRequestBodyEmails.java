package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimProvisionAndInviteUserRequestBodyEmails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public ScimProvisionAndInviteUserRequestBodyEmails withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ScimProvisionAndInviteUserRequestBodyEmails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public ScimProvisionAndInviteUserRequestBodyEmails withValue(String value) {
        this.value = value;
        return this;
    }
}