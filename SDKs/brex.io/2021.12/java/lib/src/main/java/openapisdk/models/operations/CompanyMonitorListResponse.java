package openapisdk.models.operations;



public class CompanyMonitorListResponse {
    public Object[] companyMonitorList200ApplicationJSONAnies;
    public CompanyMonitorListResponse withCompanyMonitorList200ApplicationJsonAnies(Object[] companyMonitorList200ApplicationJSONAnies) {
        this.companyMonitorList200ApplicationJSONAnies = companyMonitorList200ApplicationJSONAnies;
        return this;
    }
    public Object companyMonitorListDefaultApplicationJSONAny;
    public CompanyMonitorListResponse withCompanyMonitorListDefaultApplicationJsonAny(Object companyMonitorListDefaultApplicationJSONAny) {
        this.companyMonitorListDefaultApplicationJSONAny = companyMonitorListDefaultApplicationJSONAny;
        return this;
    }
    public String contentType;
    public CompanyMonitorListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CompanyMonitorListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}