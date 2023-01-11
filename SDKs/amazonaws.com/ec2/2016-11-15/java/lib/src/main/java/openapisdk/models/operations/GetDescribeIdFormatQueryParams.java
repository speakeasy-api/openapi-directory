package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeIdFormatActionEnum action;
    public GetDescribeIdFormatQueryParams withAction(GetDescribeIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public GetDescribeIdFormatQueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeIdFormatVersionEnum version;
    public GetDescribeIdFormatQueryParams withVersion(GetDescribeIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}