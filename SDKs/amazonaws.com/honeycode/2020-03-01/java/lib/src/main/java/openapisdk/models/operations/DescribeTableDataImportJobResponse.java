package openapisdk.models.operations;



public class DescribeTableDataImportJobResponse {
    public Object accessDeniedException;
    public DescribeTableDataImportJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeTableDataImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTableDataImportJobResult describeTableDataImportJobResult;
    public DescribeTableDataImportJobResponse withDescribeTableDataImportJobResult(openapisdk.models.shared.DescribeTableDataImportJobResult describeTableDataImportJobResult) {
        this.describeTableDataImportJobResult = describeTableDataImportJobResult;
        return this;
    }
    public Object internalServerException;
    public DescribeTableDataImportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTableDataImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeTableDataImportJobResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeTableDataImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeTableDataImportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeTableDataImportJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}