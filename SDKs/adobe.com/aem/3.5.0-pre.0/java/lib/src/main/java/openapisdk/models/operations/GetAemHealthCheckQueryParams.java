package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAemHealthCheckQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=combineTagsOr")
    public Boolean combineTagsOr;
    public GetAemHealthCheckQueryParams withCombineTagsOr(Boolean combineTagsOr) {
        this.combineTagsOr = combineTagsOr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public GetAemHealthCheckQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}