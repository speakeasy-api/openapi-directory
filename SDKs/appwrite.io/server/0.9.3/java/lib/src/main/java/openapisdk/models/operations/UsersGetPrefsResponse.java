package openapisdk.models.operations;



public class UsersGetPrefsResponse {
    public String contentType;
    public UsersGetPrefsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetPrefsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> preferences;
    public UsersGetPrefsResponse withPreferences(java.util.Map<String, Object> preferences) {
        this.preferences = preferences;
        return this;
    }
}