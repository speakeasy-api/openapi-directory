package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyIdFormatActionEnum action;
    public GetModifyIdFormatQueryParams withAction(GetModifyIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public GetModifyIdFormatQueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UseLongIds")
    public Boolean useLongIds;
    public GetModifyIdFormatQueryParams withUseLongIds(Boolean useLongIds) {
        this.useLongIds = useLongIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyIdFormatVersionEnum version;
    public GetModifyIdFormatQueryParams withVersion(GetModifyIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}