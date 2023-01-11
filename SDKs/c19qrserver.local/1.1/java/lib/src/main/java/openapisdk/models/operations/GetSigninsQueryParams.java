package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSigninsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=less_than")
    public Long lessThan;
    public GetSigninsQueryParams withLessThan(Long lessThan) {
        this.lessThan = lessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=return_count")
    public Long returnCount;
    public GetSigninsQueryParams withReturnCount(Long returnCount) {
        this.returnCount = returnCount;
        return this;
    }
}