package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName {
    @JsonProperty("familyName")
    public String familyName;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonProperty("givenName")
    public String givenName;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
}