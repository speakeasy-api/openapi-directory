package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainAssociationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public CreateDomainAssociationPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}