package openapisdk.models.operations;



public class DeleteProjectResponse {
    public String contentType;
    public DeleteProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProjectOutput;
    public DeleteProjectResponse withDeleteProjectOutput(java.util.Map<String, Object> deleteProjectOutput) {
        this.deleteProjectOutput = deleteProjectOutput;
        return this;
    }
    public Object invalidInputException;
    public DeleteProjectResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DeleteProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}