package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetSearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}