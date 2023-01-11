package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListPublicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public Long since;
    public ReposListPublicQueryParams withSince(Long since) {
        this.since = since;
        return this;
    }
}