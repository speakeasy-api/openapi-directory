package openapisdk.models.operations;



public class ReposListForUserResponse {
    public String contentType;
    public ReposListForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListForUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MinimalRepository[] minimalRepositories;
    public ReposListForUserResponse withMinimalRepositories(openapisdk.models.shared.MinimalRepository[] minimalRepositories) {
        this.minimalRepositories = minimalRepositories;
        return this;
    }
}