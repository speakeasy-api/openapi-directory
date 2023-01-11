package openapisdk.models.operations;



public class UploadEvidenceFileResponse {
    public String contentType;
    public UploadEvidenceFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileEvidence fileEvidence;
    public UploadEvidenceFileResponse withFileEvidence(openapisdk.models.shared.FileEvidence fileEvidence) {
        this.fileEvidence = fileEvidence;
        return this;
    }
    public Long statusCode;
    public UploadEvidenceFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}