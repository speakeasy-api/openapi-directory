package openapisdk.models.operations;



public class ListReportDefinitionsResponse {
    public Object accessDeniedException;
    public ListReportDefinitionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListReportDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListReportDefinitionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListReportDefinitionsResult listReportDefinitionsResult;
    public ListReportDefinitionsResponse withListReportDefinitionsResult(openapisdk.models.shared.ListReportDefinitionsResult listReportDefinitionsResult) {
        this.listReportDefinitionsResult = listReportDefinitionsResult;
        return this;
    }
    public Long statusCode;
    public ListReportDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListReportDefinitionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListReportDefinitionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}