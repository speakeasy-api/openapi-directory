package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}