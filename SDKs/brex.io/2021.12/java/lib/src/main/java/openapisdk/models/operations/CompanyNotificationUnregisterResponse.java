package openapisdk.models.operations;



public class CompanyNotificationUnregisterResponse {
    public Object companyNotificationUnregisterDefaultApplicationJSONAny;
    public CompanyNotificationUnregisterResponse withCompanyNotificationUnregisterDefaultApplicationJsonAny(Object companyNotificationUnregisterDefaultApplicationJSONAny) {
        this.companyNotificationUnregisterDefaultApplicationJSONAny = companyNotificationUnregisterDefaultApplicationJSONAny;
        return this;
    }
    public String contentType;
    public CompanyNotificationUnregisterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CompanyNotificationUnregisterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}