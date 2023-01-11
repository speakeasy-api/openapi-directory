package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public UpdateOrganizationUserPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}