package openapisdk.models.operations;



public class ListFragmentsResponse {
    public Object clientLimitExceededException;
    public ListFragmentsResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public ListFragmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public ListFragmentsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public openapisdk.models.shared.ListFragmentsOutput listFragmentsOutput;
    public ListFragmentsResponse withListFragmentsOutput(openapisdk.models.shared.ListFragmentsOutput listFragmentsOutput) {
        this.listFragmentsOutput = listFragmentsOutput;
        return this;
    }
    public Object notAuthorizedException;
    public ListFragmentsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFragmentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFragmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}