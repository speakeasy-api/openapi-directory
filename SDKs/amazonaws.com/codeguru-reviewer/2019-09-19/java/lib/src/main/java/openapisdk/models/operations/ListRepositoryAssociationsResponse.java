package openapisdk.models.operations;



public class ListRepositoryAssociationsResponse {
    public String contentType;
    public ListRepositoryAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRepositoryAssociationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListRepositoryAssociationsResponse listRepositoryAssociationsResponse;
    public ListRepositoryAssociationsResponse withListRepositoryAssociationsResponse(openapisdk.models.shared.ListRepositoryAssociationsResponse listRepositoryAssociationsResponse) {
        this.listRepositoryAssociationsResponse = listRepositoryAssociationsResponse;
        return this;
    }
    public Long statusCode;
    public ListRepositoryAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRepositoryAssociationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListRepositoryAssociationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}