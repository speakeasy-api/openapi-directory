package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateLdapMappingForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public EnterpriseAdminUpdateLdapMappingForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}