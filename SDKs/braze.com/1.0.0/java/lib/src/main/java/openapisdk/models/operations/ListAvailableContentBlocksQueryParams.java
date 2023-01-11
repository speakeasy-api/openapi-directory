package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailableContentBlocksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ListAvailableContentBlocksQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_after")
    public String modifiedAfter;
    public ListAvailableContentBlocksQueryParams withModifiedAfter(String modifiedAfter) {
        this.modifiedAfter = modifiedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_before")
    public String modifiedBefore;
    public ListAvailableContentBlocksQueryParams withModifiedBefore(String modifiedBefore) {
        this.modifiedBefore = modifiedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ListAvailableContentBlocksQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}