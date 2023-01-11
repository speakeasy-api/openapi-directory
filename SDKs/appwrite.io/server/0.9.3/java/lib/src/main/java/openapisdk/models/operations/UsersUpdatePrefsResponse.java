package openapisdk.models.operations;



public class UsersUpdatePrefsResponse {
    public String contentType;
    public UsersUpdatePrefsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersUpdatePrefsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> preferences;
    public UsersUpdatePrefsResponse withPreferences(java.util.Map<String, Object> preferences) {
        this.preferences = preferences;
        return this;
    }
}