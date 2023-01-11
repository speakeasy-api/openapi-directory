package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public Long group;
    public ProjectsListQueryParams withGroup(Long group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=institution")
    public Long institution;
    public ProjectsListQueryParams withInstitution(Long institution) {
        this.institution = institution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ProjectsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ProjectsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public ProjectsListOrderEnum order;
    public ProjectsListQueryParams withOrder(ProjectsListOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_direction")
    public ProjectsListOrderDirectionEnum orderDirection;
    public ProjectsListQueryParams withOrderDirection(ProjectsListOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ProjectsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ProjectsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published_since")
    public String publishedSince;
    public ProjectsListQueryParams withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
}