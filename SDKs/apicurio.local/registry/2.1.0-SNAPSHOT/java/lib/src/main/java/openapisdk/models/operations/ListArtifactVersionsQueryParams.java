package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArtifactVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListArtifactVersionsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListArtifactVersionsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}