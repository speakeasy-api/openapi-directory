package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchV1OrganicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetSearchV1OrganicQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field")
    public String field;
    public GetSearchV1OrganicQueryParams withField(String field) {
        this.field = field;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetSearchV1OrganicQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetSearchV1OrganicQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=total_only")
    public Boolean totalOnly;
    public GetSearchV1OrganicQueryParams withTotalOnly(Boolean totalOnly) {
        this.totalOnly = totalOnly;
        return this;
    }
}