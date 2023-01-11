package openapisdk.models.operations;



public class ListAssociatedRoute53HealthChecksResponse {
    public String contentType;
    public ListAssociatedRoute53HealthChecksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAssociatedRoute53HealthChecksResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAssociatedRoute53HealthChecksResponse listAssociatedRoute53HealthChecksResponse;
    public ListAssociatedRoute53HealthChecksResponse withListAssociatedRoute53HealthChecksResponse(openapisdk.models.shared.ListAssociatedRoute53HealthChecksResponse listAssociatedRoute53HealthChecksResponse) {
        this.listAssociatedRoute53HealthChecksResponse = listAssociatedRoute53HealthChecksResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAssociatedRoute53HealthChecksResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAssociatedRoute53HealthChecksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAssociatedRoute53HealthChecksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}