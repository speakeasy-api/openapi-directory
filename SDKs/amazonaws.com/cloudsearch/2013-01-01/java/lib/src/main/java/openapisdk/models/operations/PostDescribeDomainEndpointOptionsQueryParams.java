package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDomainEndpointOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDomainEndpointOptionsActionEnum action;
    public PostDescribeDomainEndpointOptionsQueryParams withAction(PostDescribeDomainEndpointOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDomainEndpointOptionsVersionEnum version;
    public PostDescribeDomainEndpointOptionsQueryParams withVersion(PostDescribeDomainEndpointOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}