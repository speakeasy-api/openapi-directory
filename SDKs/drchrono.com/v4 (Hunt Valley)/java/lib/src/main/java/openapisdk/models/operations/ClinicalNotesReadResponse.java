package openapisdk.models.operations;



public class ClinicalNotesReadResponse {
    public openapisdk.models.shared.ClinicalNote clinicalNote;
    public ClinicalNotesReadResponse withClinicalNote(openapisdk.models.shared.ClinicalNote clinicalNote) {
        this.clinicalNote = clinicalNote;
        return this;
    }
    public String contentType;
    public ClinicalNotesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClinicalNotesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}