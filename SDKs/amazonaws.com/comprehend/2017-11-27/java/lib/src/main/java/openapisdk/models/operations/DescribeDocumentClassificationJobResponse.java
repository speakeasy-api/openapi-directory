package openapisdk.models.operations;



public class DescribeDocumentClassificationJobResponse {
    public String contentType;
    public DescribeDocumentClassificationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDocumentClassificationJobResponse describeDocumentClassificationJobResponse;
    public DescribeDocumentClassificationJobResponse withDescribeDocumentClassificationJobResponse(openapisdk.models.shared.DescribeDocumentClassificationJobResponse describeDocumentClassificationJobResponse) {
        this.describeDocumentClassificationJobResponse = describeDocumentClassificationJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeDocumentClassificationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDocumentClassificationJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public DescribeDocumentClassificationJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDocumentClassificationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeDocumentClassificationJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}