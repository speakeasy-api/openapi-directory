package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateDhcpOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateDhcpOptionsActionEnum action;
    public PostAssociateDhcpOptionsQueryParams withAction(PostAssociateDhcpOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateDhcpOptionsVersionEnum version;
    public PostAssociateDhcpOptionsQueryParams withVersion(PostAssociateDhcpOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}