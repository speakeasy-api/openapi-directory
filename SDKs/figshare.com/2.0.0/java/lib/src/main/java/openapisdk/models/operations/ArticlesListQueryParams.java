package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArticlesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doi")
    public String doi;
    public ArticlesListQueryParams withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public Long group;
    public ArticlesListQueryParams withGroup(Long group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=handle")
    public String handle;
    public ArticlesListQueryParams withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=institution")
    public Long institution;
    public ArticlesListQueryParams withInstitution(Long institution) {
        this.institution = institution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=item_type")
    public Long itemType;
    public ArticlesListQueryParams withItemType(Long itemType) {
        this.itemType = itemType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ArticlesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_since")
    public String modifiedSince;
    public ArticlesListQueryParams withModifiedSince(String modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ArticlesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public ArticlesListOrderEnum order;
    public ArticlesListQueryParams withOrder(ArticlesListOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_direction")
    public ArticlesListOrderDirectionEnum orderDirection;
    public ArticlesListQueryParams withOrderDirection(ArticlesListOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ArticlesListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ArticlesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published_since")
    public String publishedSince;
    public ArticlesListQueryParams withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_doi")
    public String resourceDoi;
    public ArticlesListQueryParams withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
}