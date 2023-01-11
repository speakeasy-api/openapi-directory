package openapisdk.models.operations;



public class ListLtiCredentialsResponse {
    public String contentType;
    public ListLtiCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListLtiCredentialsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.LtiCredentials[] ltiCredentials;
    public ListLtiCredentialsResponse withLtiCredentials(openapisdk.models.shared.LtiCredentials[] ltiCredentials) {
        this.ltiCredentials = ltiCredentials;
        return this;
    }
    public Long statusCode;
    public ListLtiCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}