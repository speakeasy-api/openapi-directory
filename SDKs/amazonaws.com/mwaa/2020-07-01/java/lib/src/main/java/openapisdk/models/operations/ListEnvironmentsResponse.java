package openapisdk.models.operations;



public class ListEnvironmentsResponse {
    public String contentType;
    public ListEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEnvironmentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentsOutput listEnvironmentsOutput;
    public ListEnvironmentsResponse withListEnvironmentsOutput(openapisdk.models.shared.ListEnvironmentsOutput listEnvironmentsOutput) {
        this.listEnvironmentsOutput = listEnvironmentsOutput;
        return this;
    }
    public Long statusCode;
    public ListEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListEnvironmentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}