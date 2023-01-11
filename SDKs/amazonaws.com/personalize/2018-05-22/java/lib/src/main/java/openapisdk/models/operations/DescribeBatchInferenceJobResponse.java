package openapisdk.models.operations;



public class DescribeBatchInferenceJobResponse {
    public String contentType;
    public DescribeBatchInferenceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBatchInferenceJobResponse describeBatchInferenceJobResponse;
    public DescribeBatchInferenceJobResponse withDescribeBatchInferenceJobResponse(openapisdk.models.shared.DescribeBatchInferenceJobResponse describeBatchInferenceJobResponse) {
        this.describeBatchInferenceJobResponse = describeBatchInferenceJobResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeBatchInferenceJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeBatchInferenceJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBatchInferenceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}