package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchArtifactsByContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artifactType")
    public openapisdk.models.shared.ArtifactTypeEnum artifactType;
    public SearchArtifactsByContentQueryParams withArtifactType(openapisdk.models.shared.ArtifactTypeEnum artifactType) {
        this.artifactType = artifactType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=canonical")
    public Boolean canonical;
    public SearchArtifactsByContentQueryParams withCanonical(Boolean canonical) {
        this.canonical = canonical;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public SearchArtifactsByContentQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public SearchArtifactsByContentQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public SearchArtifactsByContentOrderEnum order;
    public SearchArtifactsByContentQueryParams withOrder(SearchArtifactsByContentOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderby")
    public SearchArtifactsByContentOrderbyEnum orderby;
    public SearchArtifactsByContentQueryParams withOrderby(SearchArtifactsByContentOrderbyEnum orderby) {
        this.orderby = orderby;
        return this;
    }
}