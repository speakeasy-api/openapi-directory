package openapisdk.models.operations;



public class ClinicalNoteFieldTypesListResponse {
    public String contentType;
    public ClinicalNoteFieldTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClinicalNoteFieldTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ClinicalNoteFieldTypesList200ApplicationJson clinicalNoteFieldTypesList200ApplicationJSONObject;
    public ClinicalNoteFieldTypesListResponse withClinicalNoteFieldTypesList200ApplicationJsonObject(ClinicalNoteFieldTypesList200ApplicationJson clinicalNoteFieldTypesList200ApplicationJSONObject) {
        this.clinicalNoteFieldTypesList200ApplicationJSONObject = clinicalNoteFieldTypesList200ApplicationJSONObject;
        return this;
    }
}