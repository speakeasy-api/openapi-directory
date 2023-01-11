package openapisdk.models.operations;



public class DescribeCertificateAuthorityAuditReportResponse {
    public String contentType;
    public DescribeCertificateAuthorityAuditReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCertificateAuthorityAuditReportResponse describeCertificateAuthorityAuditReportResponse;
    public DescribeCertificateAuthorityAuditReportResponse withDescribeCertificateAuthorityAuditReportResponse(openapisdk.models.shared.DescribeCertificateAuthorityAuditReportResponse describeCertificateAuthorityAuditReportResponse) {
        this.describeCertificateAuthorityAuditReportResponse = describeCertificateAuthorityAuditReportResponse;
        return this;
    }
    public Object invalidArgsException;
    public DescribeCertificateAuthorityAuditReportResponse withInvalidArgsException(Object invalidArgsException) {
        this.invalidArgsException = invalidArgsException;
        return this;
    }
    public Object invalidArnException;
    public DescribeCertificateAuthorityAuditReportResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCertificateAuthorityAuditReportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCertificateAuthorityAuditReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}