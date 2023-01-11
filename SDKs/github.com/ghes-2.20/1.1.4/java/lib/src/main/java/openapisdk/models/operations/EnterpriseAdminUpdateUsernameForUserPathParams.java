package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateUsernameForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public EnterpriseAdminUpdateUsernameForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}