package openapisdk.models.operations;



public class GetStatisticsChargingRequest {
    public GetStatisticsChargingQueryParams queryParams;
    public GetStatisticsChargingRequest withQueryParams(GetStatisticsChargingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStatisticsChargingSecurity security;
    public GetStatisticsChargingRequest withSecurity(GetStatisticsChargingSecurity security) {
        this.security = security;
        return this;
    }
}