package openapisdk.models.operations;



public class ListPipelineExecutionsResponse {
    public String contentType;
    public ListPipelineExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPipelineExecutionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListPipelineExecutionsOutput listPipelineExecutionsOutput;
    public ListPipelineExecutionsResponse withListPipelineExecutionsOutput(openapisdk.models.shared.ListPipelineExecutionsOutput listPipelineExecutionsOutput) {
        this.listPipelineExecutionsOutput = listPipelineExecutionsOutput;
        return this;
    }
    public Object pipelineNotFoundException;
    public ListPipelineExecutionsResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPipelineExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListPipelineExecutionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}