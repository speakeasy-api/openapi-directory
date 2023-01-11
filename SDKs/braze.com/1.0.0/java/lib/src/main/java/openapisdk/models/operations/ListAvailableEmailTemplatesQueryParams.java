package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailableEmailTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ListAvailableEmailTemplatesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_after")
    public String modifiedAfter;
    public ListAvailableEmailTemplatesQueryParams withModifiedAfter(String modifiedAfter) {
        this.modifiedAfter = modifiedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_before")
    public String modifiedBefore;
    public ListAvailableEmailTemplatesQueryParams withModifiedBefore(String modifiedBefore) {
        this.modifiedBefore = modifiedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ListAvailableEmailTemplatesQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}