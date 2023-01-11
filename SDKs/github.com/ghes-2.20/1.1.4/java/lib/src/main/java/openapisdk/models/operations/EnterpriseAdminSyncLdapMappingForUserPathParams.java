package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSyncLdapMappingForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public EnterpriseAdminSyncLdapMappingForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}