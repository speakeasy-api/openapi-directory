package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetFactCategoriesQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
}