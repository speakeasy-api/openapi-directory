package openapisdk.models.operations;



public class ListBuildBatchesResponse {
    public String contentType;
    public ListBuildBatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListBuildBatchesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListBuildBatchesOutput listBuildBatchesOutput;
    public ListBuildBatchesResponse withListBuildBatchesOutput(openapisdk.models.shared.ListBuildBatchesOutput listBuildBatchesOutput) {
        this.listBuildBatchesOutput = listBuildBatchesOutput;
        return this;
    }
    public Long statusCode;
    public ListBuildBatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}