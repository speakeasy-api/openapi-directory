package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_chargestation")
    public Boolean includeChargestation;
    public GetTransactionQueryParams withIncludeChargestation(Boolean includeChargestation) {
        this.includeChargestation = includeChargestation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_connector")
    public Boolean includeConnector;
    public GetTransactionQueryParams withIncludeConnector(Boolean includeConnector) {
        this.includeConnector = includeConnector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_driver")
    public Boolean includeDriver;
    public GetTransactionQueryParams withIncludeDriver(Boolean includeDriver) {
        this.includeDriver = includeDriver;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_evse")
    public Boolean includeEvse;
    public GetTransactionQueryParams withIncludeEvse(Boolean includeEvse) {
        this.includeEvse = includeEvse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetTransactionQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_rate")
    public Boolean includeRate;
    public GetTransactionQueryParams withIncludeRate(Boolean includeRate) {
        this.includeRate = includeRate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_reservation")
    public Boolean includeReservation;
    public GetTransactionQueryParams withIncludeReservation(Boolean includeReservation) {
        this.includeReservation = includeReservation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_token")
    public Boolean includeToken;
    public GetTransactionQueryParams withIncludeToken(Boolean includeToken) {
        this.includeToken = includeToken;
        return this;
    }
}