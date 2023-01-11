package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateDomainEndpointOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateDomainEndpointOptionsActionEnum action;
    public PostUpdateDomainEndpointOptionsQueryParams withAction(PostUpdateDomainEndpointOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateDomainEndpointOptionsVersionEnum version;
    public PostUpdateDomainEndpointOptionsQueryParams withVersion(PostUpdateDomainEndpointOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}