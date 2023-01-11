package openapisdk.models.operations;



public class CompanyMonitorUnregisterResponse {
    public Object companyMonitorUnregisterDefaultApplicationJSONAny;
    public CompanyMonitorUnregisterResponse withCompanyMonitorUnregisterDefaultApplicationJsonAny(Object companyMonitorUnregisterDefaultApplicationJSONAny) {
        this.companyMonitorUnregisterDefaultApplicationJSONAny = companyMonitorUnregisterDefaultApplicationJSONAny;
        return this;
    }
    public String contentType;
    public CompanyMonitorUnregisterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CompanyMonitorUnregisterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}