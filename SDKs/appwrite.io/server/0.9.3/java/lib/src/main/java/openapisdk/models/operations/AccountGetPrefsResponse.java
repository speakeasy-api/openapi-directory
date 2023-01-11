package openapisdk.models.operations;



public class AccountGetPrefsResponse {
    public String contentType;
    public AccountGetPrefsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountGetPrefsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> preferences;
    public AccountGetPrefsResponse withPreferences(java.util.Map<String, Object> preferences) {
        this.preferences = preferences;
        return this;
    }
}