package openapisdk.models.operations;



public class ImportCertificateResponse {
    public String contentType;
    public ImportCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportCertificateResponse importCertificateResponse;
    public ImportCertificateResponse withImportCertificateResponse(openapisdk.models.shared.ImportCertificateResponse importCertificateResponse) {
        this.importCertificateResponse = importCertificateResponse;
        return this;
    }
    public Object invalidArnException;
    public ImportCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidParameterException;
    public ImportCertificateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidTagException;
    public ImportCertificateResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Object limitExceededException;
    public ImportCertificateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public ImportCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ImportCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagPolicyException;
    public ImportCertificateResponse withTagPolicyException(Object tagPolicyException) {
        this.tagPolicyException = tagPolicyException;
        return this;
    }
    public Object tooManyTagsException;
    public ImportCertificateResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}