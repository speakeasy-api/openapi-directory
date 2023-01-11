package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt[$gte]")
    public OffsetDateTime createdAtDollarGte;
    public GetConnectorsQueryParams withCreatedAtDollarGte(OffsetDateTime createdAtDollarGte) {
        this.createdAtDollarGte = createdAtDollarGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt[$lte]")
    public OffsetDateTime createdAtDollarLte;
    public GetConnectorsQueryParams withCreatedAtDollarLte(OffsetDateTime createdAtDollarLte) {
        this.createdAtDollarLte = createdAtDollarLte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_evse")
    public Boolean includeEvse;
    public GetConnectorsQueryParams withIncludeEvse(Boolean includeEvse) {
        this.includeEvse = includeEvse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetConnectorsQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_rate")
    public Boolean includeRate;
    public GetConnectorsQueryParams withIncludeRate(Boolean includeRate) {
        this.includeRate = includeRate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_enabled")
    public Boolean paginateEnabled;
    public GetConnectorsQueryParams withPaginateEnabled(Boolean paginateEnabled) {
        this.paginateEnabled = paginateEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_limit")
    public Long paginateLimit;
    public GetConnectorsQueryParams withPaginateLimit(Long paginateLimit) {
        this.paginateLimit = paginateLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_page")
    public String paginatePage;
    public GetConnectorsQueryParams withPaginatePage(String paginatePage) {
        this.paginatePage = paginatePage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetConnectorsQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrder1Enum sortOrder;
    public GetConnectorsQueryParams withSortOrder(openapisdk.models.shared.SortOrder1Enum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt[$gte]")
    public OffsetDateTime updatedAtDollarGte;
    public GetConnectorsQueryParams withUpdatedAtDollarGte(OffsetDateTime updatedAtDollarGte) {
        this.updatedAtDollarGte = updatedAtDollarGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt[$lte]")
    public OffsetDateTime updatedAtDollarLte;
    public GetConnectorsQueryParams withUpdatedAtDollarLte(OffsetDateTime updatedAtDollarLte) {
        this.updatedAtDollarLte = updatedAtDollarLte;
        return this;
    }
}