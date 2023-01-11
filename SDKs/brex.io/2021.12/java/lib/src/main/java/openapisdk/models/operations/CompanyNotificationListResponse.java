package openapisdk.models.operations;



public class CompanyNotificationListResponse {
    public Object[] companyNotificationList200ApplicationJSONAnies;
    public CompanyNotificationListResponse withCompanyNotificationList200ApplicationJsonAnies(Object[] companyNotificationList200ApplicationJSONAnies) {
        this.companyNotificationList200ApplicationJSONAnies = companyNotificationList200ApplicationJSONAnies;
        return this;
    }
    public Object companyNotificationListDefaultApplicationJSONAny;
    public CompanyNotificationListResponse withCompanyNotificationListDefaultApplicationJsonAny(Object companyNotificationListDefaultApplicationJSONAny) {
        this.companyNotificationListDefaultApplicationJSONAny = companyNotificationListDefaultApplicationJSONAny;
        return this;
    }
    public String contentType;
    public CompanyNotificationListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CompanyNotificationListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}