package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUserName {
    @JsonProperty("familyName")
    public String familyName;
    public ScimUserName withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatted")
    public String formatted;
    public ScimUserName withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }
    @JsonProperty("givenName")
    public String givenName;
    public ScimUserName withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
}