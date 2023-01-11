package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetChargeStationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=active")
    public Boolean active;
    public GetChargeStationsQueryParams withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt[$gte]")
    public OffsetDateTime createdAtDollarGte;
    public GetChargeStationsQueryParams withCreatedAtDollarGte(OffsetDateTime createdAtDollarGte) {
        this.createdAtDollarGte = createdAtDollarGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt[$lte]")
    public OffsetDateTime createdAtDollarLte;
    public GetChargeStationsQueryParams withCreatedAtDollarLte(OffsetDateTime createdAtDollarLte) {
        this.createdAtDollarLte = createdAtDollarLte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_evses")
    public Boolean includeEvses;
    public GetChargeStationsQueryParams withIncludeEvses(Boolean includeEvses) {
        this.includeEvses = includeEvses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_location")
    public Boolean includeLocation;
    public GetChargeStationsQueryParams withIncludeLocation(Boolean includeLocation) {
        this.includeLocation = includeLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetChargeStationsQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public String location;
    public GetChargeStationsQueryParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=online")
    public Boolean online;
    public GetChargeStationsQueryParams withOnline(Boolean online) {
        this.online = online;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=organization")
    public String organization;
    public GetChargeStationsQueryParams withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_enabled")
    public Boolean paginateEnabled;
    public GetChargeStationsQueryParams withPaginateEnabled(Boolean paginateEnabled) {
        this.paginateEnabled = paginateEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_limit")
    public Long paginateLimit;
    public GetChargeStationsQueryParams withPaginateLimit(Long paginateLimit) {
        this.paginateLimit = paginateLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_page")
    public String paginatePage;
    public GetChargeStationsQueryParams withPaginatePage(String paginatePage) {
        this.paginatePage = paginatePage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=public")
    public Boolean public_;
    public GetChargeStationsQueryParams withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetChargeStationsQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrder1Enum sortOrder;
    public GetChargeStationsQueryParams withSortOrder(openapisdk.models.shared.SortOrder1Enum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt[$gte]")
    public OffsetDateTime updatedAtDollarGte;
    public GetChargeStationsQueryParams withUpdatedAtDollarGte(OffsetDateTime updatedAtDollarGte) {
        this.updatedAtDollarGte = updatedAtDollarGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt[$lte]")
    public OffsetDateTime updatedAtDollarLte;
    public GetChargeStationsQueryParams withUpdatedAtDollarLte(OffsetDateTime updatedAtDollarLte) {
        this.updatedAtDollarLte = updatedAtDollarLte;
        return this;
    }
}