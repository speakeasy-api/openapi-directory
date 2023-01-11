package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doi")
    public String doi;
    public CollectionsListQueryParams withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public Long group;
    public CollectionsListQueryParams withGroup(Long group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=handle")
    public String handle;
    public CollectionsListQueryParams withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=institution")
    public Long institution;
    public CollectionsListQueryParams withInstitution(Long institution) {
        this.institution = institution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CollectionsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_since")
    public String modifiedSince;
    public CollectionsListQueryParams withModifiedSince(String modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public CollectionsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public CollectionsListOrderEnum order;
    public CollectionsListQueryParams withOrder(CollectionsListOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_direction")
    public CollectionsListOrderDirectionEnum orderDirection;
    public CollectionsListQueryParams withOrderDirection(CollectionsListOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CollectionsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public CollectionsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published_since")
    public String publishedSince;
    public CollectionsListQueryParams withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_doi")
    public String resourceDoi;
    public CollectionsListQueryParams withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
}