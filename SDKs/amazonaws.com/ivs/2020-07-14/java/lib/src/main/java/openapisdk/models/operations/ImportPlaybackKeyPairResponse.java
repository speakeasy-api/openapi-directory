package openapisdk.models.operations;



public class ImportPlaybackKeyPairResponse {
    public Object accessDeniedException;
    public ImportPlaybackKeyPairResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ImportPlaybackKeyPairResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ImportPlaybackKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportPlaybackKeyPairResponse importPlaybackKeyPairResponse;
    public ImportPlaybackKeyPairResponse withImportPlaybackKeyPairResponse(openapisdk.models.shared.ImportPlaybackKeyPairResponse importPlaybackKeyPairResponse) {
        this.importPlaybackKeyPairResponse = importPlaybackKeyPairResponse;
        return this;
    }
    public Object pendingVerification;
    public ImportPlaybackKeyPairResponse withPendingVerification(Object pendingVerification) {
        this.pendingVerification = pendingVerification;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ImportPlaybackKeyPairResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ImportPlaybackKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ImportPlaybackKeyPairResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}