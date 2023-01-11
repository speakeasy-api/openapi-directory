package openapisdk.models.operations;



public class DescribeIcd10CmInferenceJobResponse {
    public String contentType;
    public DescribeIcd10CmInferenceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeIcd10CmInferenceJobResponse describeIcd10CMInferenceJobResponse;
    public DescribeIcd10CmInferenceJobResponse withDescribeIcd10CmInferenceJobResponse(openapisdk.models.shared.DescribeIcd10CmInferenceJobResponse describeIcd10CMInferenceJobResponse) {
        this.describeIcd10CMInferenceJobResponse = describeIcd10CMInferenceJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeIcd10CmInferenceJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeIcd10CmInferenceJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeIcd10CmInferenceJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeIcd10CmInferenceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeIcd10CmInferenceJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}