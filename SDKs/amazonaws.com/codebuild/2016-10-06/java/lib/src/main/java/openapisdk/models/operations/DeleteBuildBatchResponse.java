package openapisdk.models.operations;



public class DeleteBuildBatchResponse {
    public String contentType;
    public DeleteBuildBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBuildBatchOutput deleteBuildBatchOutput;
    public DeleteBuildBatchResponse withDeleteBuildBatchOutput(openapisdk.models.shared.DeleteBuildBatchOutput deleteBuildBatchOutput) {
        this.deleteBuildBatchOutput = deleteBuildBatchOutput;
        return this;
    }
    public Object invalidInputException;
    public DeleteBuildBatchResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DeleteBuildBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}