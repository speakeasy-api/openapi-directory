package openapisdk.models.operations;



public class ListResourcesForTagOptionResponse {
    public String contentType;
    public ListResourcesForTagOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListResourcesForTagOptionResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListResourcesForTagOptionOutput listResourcesForTagOptionOutput;
    public ListResourcesForTagOptionResponse withListResourcesForTagOptionOutput(openapisdk.models.shared.ListResourcesForTagOptionOutput listResourcesForTagOptionOutput) {
        this.listResourcesForTagOptionOutput = listResourcesForTagOptionOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListResourcesForTagOptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListResourcesForTagOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public ListResourcesForTagOptionResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}