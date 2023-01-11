package openapisdk.models.operations;



public class DescribeBuildResponse {
    public String contentType;
    public DescribeBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBuildOutput describeBuildOutput;
    public DescribeBuildResponse withDescribeBuildOutput(openapisdk.models.shared.DescribeBuildOutput describeBuildOutput) {
        this.describeBuildOutput = describeBuildOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeBuildResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeBuildResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeBuildResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeBuildResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}