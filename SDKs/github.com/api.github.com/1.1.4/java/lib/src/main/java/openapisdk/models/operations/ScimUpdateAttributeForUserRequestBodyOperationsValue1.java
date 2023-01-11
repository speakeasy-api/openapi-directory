package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUpdateAttributeForUserRequestBodyOperationsValue1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public ScimUpdateAttributeForUserRequestBodyOperationsValue1 withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public ScimUpdateAttributeForUserRequestBodyOperationsValue1 withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyName")
    public String familyName;
    public ScimUpdateAttributeForUserRequestBodyOperationsValue1 withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("givenName")
    public String givenName;
    public ScimUpdateAttributeForUserRequestBodyOperationsValue1 withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public ScimUpdateAttributeForUserRequestBodyOperationsValue1 withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}