package openapisdk.models.operations;



public class GenerateAccessLogsResponse {
    public Object badRequestException;
    public GenerateAccessLogsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GenerateAccessLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateAccessLogsResult generateAccessLogsResult;
    public GenerateAccessLogsResponse withGenerateAccessLogsResult(openapisdk.models.shared.GenerateAccessLogsResult generateAccessLogsResult) {
        this.generateAccessLogsResult = generateAccessLogsResult;
        return this;
    }
    public Object internalFailureException;
    public GenerateAccessLogsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GenerateAccessLogsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GenerateAccessLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GenerateAccessLogsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}