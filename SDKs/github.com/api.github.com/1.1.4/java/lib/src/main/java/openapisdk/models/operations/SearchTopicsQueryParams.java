package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchTopicsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchTopicsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}