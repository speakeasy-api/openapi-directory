package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTokensQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt[$gte]")
    public OffsetDateTime createdAtDollarGte;
    public GetTokensQueryParams withCreatedAtDollarGte(OffsetDateTime createdAtDollarGte) {
        this.createdAtDollarGte = createdAtDollarGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt[$lte]")
    public OffsetDateTime createdAtDollarLte;
    public GetTokensQueryParams withCreatedAtDollarLte(OffsetDateTime createdAtDollarLte) {
        this.createdAtDollarLte = createdAtDollarLte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_driver")
    public Boolean includeDriver;
    public GetTokensQueryParams withIncludeDriver(Boolean includeDriver) {
        this.includeDriver = includeDriver;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetTokensQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_enabled")
    public Boolean paginateEnabled;
    public GetTokensQueryParams withPaginateEnabled(Boolean paginateEnabled) {
        this.paginateEnabled = paginateEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_limit")
    public Long paginateLimit;
    public GetTokensQueryParams withPaginateLimit(Long paginateLimit) {
        this.paginateLimit = paginateLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_page")
    public String paginatePage;
    public GetTokensQueryParams withPaginatePage(String paginatePage) {
        this.paginatePage = paginatePage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetTokensQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrder1Enum sortOrder;
    public GetTokensQueryParams withSortOrder(openapisdk.models.shared.SortOrder1Enum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt[$gte]")
    public OffsetDateTime updatedAtDollarGte;
    public GetTokensQueryParams withUpdatedAtDollarGte(OffsetDateTime updatedAtDollarGte) {
        this.updatedAtDollarGte = updatedAtDollarGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt[$lte]")
    public OffsetDateTime updatedAtDollarLte;
    public GetTokensQueryParams withUpdatedAtDollarLte(OffsetDateTime updatedAtDollarLte) {
        this.updatedAtDollarLte = updatedAtDollarLte;
        return this;
    }
}