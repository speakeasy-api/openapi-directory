package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchArtifactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchArtifactsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchArtifactsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labels")
    public String[] labels;
    public SearchArtifactsQueryParams withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public SearchArtifactsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchArtifactsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public SearchArtifactsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.SortOrderEnum order;
    public SearchArtifactsQueryParams withOrder(openapisdk.models.shared.SortOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderby")
    public openapisdk.models.shared.SortByEnum orderby;
    public SearchArtifactsQueryParams withOrderby(openapisdk.models.shared.SortByEnum orderby) {
        this.orderby = orderby;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=properties")
    public String[] properties;
    public SearchArtifactsQueryParams withProperties(String[] properties) {
        this.properties = properties;
        return this;
    }
}