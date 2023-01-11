package openapisdk.models.operations;



public class ListPipelinesResponse {
    public String contentType;
    public ListPipelinesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPipelinesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListPipelinesOutput listPipelinesOutput;
    public ListPipelinesResponse withListPipelinesOutput(openapisdk.models.shared.ListPipelinesOutput listPipelinesOutput) {
        this.listPipelinesOutput = listPipelinesOutput;
        return this;
    }
    public Long statusCode;
    public ListPipelinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListPipelinesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}