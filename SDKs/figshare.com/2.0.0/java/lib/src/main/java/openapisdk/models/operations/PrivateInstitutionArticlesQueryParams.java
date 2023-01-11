package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionArticlesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=item_type")
    public Long itemType;
    public PrivateInstitutionArticlesQueryParams withItemType(Long itemType) {
        this.itemType = itemType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public PrivateInstitutionArticlesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_since")
    public String modifiedSince;
    public PrivateInstitutionArticlesQueryParams withModifiedSince(String modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public PrivateInstitutionArticlesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public PrivateInstitutionArticlesOrderEnum order;
    public PrivateInstitutionArticlesQueryParams withOrder(PrivateInstitutionArticlesOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_direction")
    public PrivateInstitutionArticlesOrderDirectionEnum orderDirection;
    public PrivateInstitutionArticlesQueryParams withOrderDirection(PrivateInstitutionArticlesOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PrivateInstitutionArticlesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PrivateInstitutionArticlesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published_since")
    public String publishedSince;
    public PrivateInstitutionArticlesQueryParams withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_doi")
    public String resourceDoi;
    public PrivateInstitutionArticlesQueryParams withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public Long status;
    public PrivateInstitutionArticlesQueryParams withStatus(Long status) {
        this.status = status;
        return this;
    }
}