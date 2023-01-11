package openapisdk.models.operations;



public class ListUserProfilesResponse {
    public String contentType;
    public ListUserProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListUserProfilesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListUserProfilesResult listUserProfilesResult;
    public ListUserProfilesResponse withListUserProfilesResult(openapisdk.models.shared.ListUserProfilesResult listUserProfilesResult) {
        this.listUserProfilesResult = listUserProfilesResult;
        return this;
    }
    public Long statusCode;
    public ListUserProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListUserProfilesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}