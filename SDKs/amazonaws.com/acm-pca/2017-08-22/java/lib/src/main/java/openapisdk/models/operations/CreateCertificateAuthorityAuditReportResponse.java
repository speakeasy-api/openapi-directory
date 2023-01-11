package openapisdk.models.operations;



public class CreateCertificateAuthorityAuditReportResponse {
    public String contentType;
    public CreateCertificateAuthorityAuditReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCertificateAuthorityAuditReportResponse createCertificateAuthorityAuditReportResponse;
    public CreateCertificateAuthorityAuditReportResponse withCreateCertificateAuthorityAuditReportResponse(openapisdk.models.shared.CreateCertificateAuthorityAuditReportResponse createCertificateAuthorityAuditReportResponse) {
        this.createCertificateAuthorityAuditReportResponse = createCertificateAuthorityAuditReportResponse;
        return this;
    }
    public Object invalidArgsException;
    public CreateCertificateAuthorityAuditReportResponse withInvalidArgsException(Object invalidArgsException) {
        this.invalidArgsException = invalidArgsException;
        return this;
    }
    public Object invalidArnException;
    public CreateCertificateAuthorityAuditReportResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public CreateCertificateAuthorityAuditReportResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object requestFailedException;
    public CreateCertificateAuthorityAuditReportResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object requestInProgressException;
    public CreateCertificateAuthorityAuditReportResponse withRequestInProgressException(Object requestInProgressException) {
        this.requestInProgressException = requestInProgressException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateCertificateAuthorityAuditReportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateCertificateAuthorityAuditReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}