package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt[$gte]")
    public OffsetDateTime createdAtDollarGte;
    public GetTransactionsQueryParams withCreatedAtDollarGte(OffsetDateTime createdAtDollarGte) {
        this.createdAtDollarGte = createdAtDollarGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAt[$lte]")
    public OffsetDateTime createdAtDollarLte;
    public GetTransactionsQueryParams withCreatedAtDollarLte(OffsetDateTime createdAtDollarLte) {
        this.createdAtDollarLte = createdAtDollarLte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_chargestation")
    public Boolean includeChargestation;
    public GetTransactionsQueryParams withIncludeChargestation(Boolean includeChargestation) {
        this.includeChargestation = includeChargestation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_connector")
    public Boolean includeConnector;
    public GetTransactionsQueryParams withIncludeConnector(Boolean includeConnector) {
        this.includeConnector = includeConnector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_driver")
    public Boolean includeDriver;
    public GetTransactionsQueryParams withIncludeDriver(Boolean includeDriver) {
        this.includeDriver = includeDriver;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_evse")
    public Boolean includeEvse;
    public GetTransactionsQueryParams withIncludeEvse(Boolean includeEvse) {
        this.includeEvse = includeEvse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetTransactionsQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_rate")
    public Boolean includeRate;
    public GetTransactionsQueryParams withIncludeRate(Boolean includeRate) {
        this.includeRate = includeRate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_reservation")
    public Boolean includeReservation;
    public GetTransactionsQueryParams withIncludeReservation(Boolean includeReservation) {
        this.includeReservation = includeReservation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_token")
    public Boolean includeToken;
    public GetTransactionsQueryParams withIncludeToken(Boolean includeToken) {
        this.includeToken = includeToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_enabled")
    public Boolean paginateEnabled;
    public GetTransactionsQueryParams withPaginateEnabled(Boolean paginateEnabled) {
        this.paginateEnabled = paginateEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_limit")
    public Long paginateLimit;
    public GetTransactionsQueryParams withPaginateLimit(Long paginateLimit) {
        this.paginateLimit = paginateLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paginate_page")
    public String paginatePage;
    public GetTransactionsQueryParams withPaginatePage(String paginatePage) {
        this.paginatePage = paginatePage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetTransactionsQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrder1Enum sortOrder;
    public GetTransactionsQueryParams withSortOrder(openapisdk.models.shared.SortOrder1Enum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetTransactionsStatusEnum status;
    public GetTransactionsQueryParams withStatus(GetTransactionsStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt[$gte]")
    public OffsetDateTime updatedAtDollarGte;
    public GetTransactionsQueryParams withUpdatedAtDollarGte(OffsetDateTime updatedAtDollarGte) {
        this.updatedAtDollarGte = updatedAtDollarGte;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAt[$lte]")
    public OffsetDateTime updatedAtDollarLte;
    public GetTransactionsQueryParams withUpdatedAtDollarLte(OffsetDateTime updatedAtDollarLte) {
        this.updatedAtDollarLte = updatedAtDollarLte;
        return this;
    }
}