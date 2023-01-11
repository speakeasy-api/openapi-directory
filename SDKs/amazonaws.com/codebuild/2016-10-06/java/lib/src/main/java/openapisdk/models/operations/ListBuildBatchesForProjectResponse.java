package openapisdk.models.operations;



public class ListBuildBatchesForProjectResponse {
    public String contentType;
    public ListBuildBatchesForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListBuildBatchesForProjectResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListBuildBatchesForProjectOutput listBuildBatchesForProjectOutput;
    public ListBuildBatchesForProjectResponse withListBuildBatchesForProjectOutput(openapisdk.models.shared.ListBuildBatchesForProjectOutput listBuildBatchesForProjectOutput) {
        this.listBuildBatchesForProjectOutput = listBuildBatchesForProjectOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListBuildBatchesForProjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListBuildBatchesForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}