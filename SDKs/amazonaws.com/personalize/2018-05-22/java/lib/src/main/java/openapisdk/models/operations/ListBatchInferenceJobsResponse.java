package openapisdk.models.operations;



public class ListBatchInferenceJobsResponse {
    public String contentType;
    public ListBatchInferenceJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListBatchInferenceJobsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListBatchInferenceJobsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListBatchInferenceJobsResponse listBatchInferenceJobsResponse;
    public ListBatchInferenceJobsResponse withListBatchInferenceJobsResponse(openapisdk.models.shared.ListBatchInferenceJobsResponse listBatchInferenceJobsResponse) {
        this.listBatchInferenceJobsResponse = listBatchInferenceJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListBatchInferenceJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}