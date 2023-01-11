package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDomainAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public ListDomainAssociationsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}