package openapisdk.models.operations;



public class DescribeEntitiesDetectionV2JobResponse {
    public String contentType;
    public DescribeEntitiesDetectionV2JobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEntitiesDetectionV2JobResponse describeEntitiesDetectionV2JobResponse;
    public DescribeEntitiesDetectionV2JobResponse withDescribeEntitiesDetectionV2JobResponse(openapisdk.models.shared.DescribeEntitiesDetectionV2JobResponse describeEntitiesDetectionV2JobResponse) {
        this.describeEntitiesDetectionV2JobResponse = describeEntitiesDetectionV2JobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeEntitiesDetectionV2JobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeEntitiesDetectionV2JobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEntitiesDetectionV2JobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEntitiesDetectionV2JobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeEntitiesDetectionV2JobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}