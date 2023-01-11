package openapisdk.models.operations;



public class AssociateNodeResponse {
    public openapisdk.models.shared.AssociateNodeResponse associateNodeResponse;
    public AssociateNodeResponse withAssociateNodeResponse(openapisdk.models.shared.AssociateNodeResponse associateNodeResponse) {
        this.associateNodeResponse = associateNodeResponse;
        return this;
    }
    public String contentType;
    public AssociateNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidStateException;
    public AssociateNodeResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateNodeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AssociateNodeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}