package openapisdk.models.operations;



public class ListActionExecutionsResponse {
    public String contentType;
    public ListActionExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListActionExecutionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListActionExecutionsOutput listActionExecutionsOutput;
    public ListActionExecutionsResponse withListActionExecutionsOutput(openapisdk.models.shared.ListActionExecutionsOutput listActionExecutionsOutput) {
        this.listActionExecutionsOutput = listActionExecutionsOutput;
        return this;
    }
    public Object pipelineExecutionNotFoundException;
    public ListActionExecutionsResponse withPipelineExecutionNotFoundException(Object pipelineExecutionNotFoundException) {
        this.pipelineExecutionNotFoundException = pipelineExecutionNotFoundException;
        return this;
    }
    public Object pipelineNotFoundException;
    public ListActionExecutionsResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListActionExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListActionExecutionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}