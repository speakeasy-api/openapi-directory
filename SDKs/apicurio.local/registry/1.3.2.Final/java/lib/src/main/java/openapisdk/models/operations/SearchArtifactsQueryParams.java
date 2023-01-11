package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchArtifactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public SearchArtifactsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public SearchArtifactsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public SearchArtifactsOrderEnum order;
    public SearchArtifactsQueryParams withOrder(SearchArtifactsOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=over")
    public SearchArtifactsOverEnum over;
    public SearchArtifactsQueryParams withOver(SearchArtifactsOverEnum over) {
        this.over = over;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public SearchArtifactsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}