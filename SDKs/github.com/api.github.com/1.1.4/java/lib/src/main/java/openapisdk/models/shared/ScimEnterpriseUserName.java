package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimEnterpriseUserName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyName")
    public String familyName;
    public ScimEnterpriseUserName withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("givenName")
    public String givenName;
    public ScimEnterpriseUserName withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
}