package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimSetInformationForProvisionedUserRequestBodyName {
    @JsonProperty("familyName")
    public String familyName;
    public ScimSetInformationForProvisionedUserRequestBodyName withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatted")
    public String formatted;
    public ScimSetInformationForProvisionedUserRequestBodyName withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }
    @JsonProperty("givenName")
    public String givenName;
    public ScimSetInformationForProvisionedUserRequestBodyName withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
}