package openapisdk.models.operations;



public class ClinicalNotesListResponse {
    public String contentType;
    public ClinicalNotesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClinicalNotesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ClinicalNotesList200ApplicationJson clinicalNotesList200ApplicationJSONObject;
    public ClinicalNotesListResponse withClinicalNotesList200ApplicationJsonObject(ClinicalNotesList200ApplicationJson clinicalNotesList200ApplicationJSONObject) {
        this.clinicalNotesList200ApplicationJSONObject = clinicalNotesList200ApplicationJSONObject;
        return this;
    }
}