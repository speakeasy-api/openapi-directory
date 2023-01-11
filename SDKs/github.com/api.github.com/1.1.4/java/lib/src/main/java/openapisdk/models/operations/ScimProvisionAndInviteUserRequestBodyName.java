package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimProvisionAndInviteUserRequestBodyName {
    @JsonProperty("familyName")
    public String familyName;
    public ScimProvisionAndInviteUserRequestBodyName withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatted")
    public String formatted;
    public ScimProvisionAndInviteUserRequestBodyName withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }
    @JsonProperty("givenName")
    public String givenName;
    public ScimProvisionAndInviteUserRequestBodyName withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
}