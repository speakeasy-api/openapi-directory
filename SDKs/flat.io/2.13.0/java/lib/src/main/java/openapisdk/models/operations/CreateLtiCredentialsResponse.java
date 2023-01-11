package openapisdk.models.operations;



public class CreateLtiCredentialsResponse {
    public String contentType;
    public CreateLtiCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CreateLtiCredentialsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.LtiCredentials ltiCredentials;
    public CreateLtiCredentialsResponse withLtiCredentials(openapisdk.models.shared.LtiCredentials ltiCredentials) {
        this.ltiCredentials = ltiCredentials;
        return this;
    }
    public Long statusCode;
    public CreateLtiCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}