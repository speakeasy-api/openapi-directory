package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName {
    @JsonProperty("familyName")
    public String familyName;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonProperty("givenName")
    public String givenName;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
}