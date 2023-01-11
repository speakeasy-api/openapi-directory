package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUserEmails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public ScimUserEmails withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public ScimUserEmails withValue(String value) {
        this.value = value;
        return this;
    }
}