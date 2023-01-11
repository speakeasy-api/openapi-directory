package openapisdk.models.operations;



public class ReposListForksResponse {
    public String contentType;
    public ReposListForksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListForksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListForksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListForksResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.MinimalRepository[] minimalRepositories;
    public ReposListForksResponse withMinimalRepositories(openapisdk.models.shared.MinimalRepository[] minimalRepositories) {
        this.minimalRepositories = minimalRepositories;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ReposListForksResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
}