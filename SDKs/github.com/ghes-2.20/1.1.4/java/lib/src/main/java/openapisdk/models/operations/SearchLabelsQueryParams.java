package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchLabelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.OrderEnum order;
    public SearchLabelsQueryParams withOrder(openapisdk.models.shared.OrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchLabelsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=repository_id")
    public Long repositoryId;
    public SearchLabelsQueryParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchLabelsSortEnum sort;
    public SearchLabelsQueryParams withSort(SearchLabelsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}