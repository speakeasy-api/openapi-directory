package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveOrganizationUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public RemoveOrganizationUserPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}