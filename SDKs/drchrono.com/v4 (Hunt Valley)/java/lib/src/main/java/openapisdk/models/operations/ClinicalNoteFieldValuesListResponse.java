package openapisdk.models.operations;



public class ClinicalNoteFieldValuesListResponse {
    public String contentType;
    public ClinicalNoteFieldValuesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClinicalNoteFieldValuesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ClinicalNoteFieldValuesList200ApplicationJson clinicalNoteFieldValuesList200ApplicationJSONObject;
    public ClinicalNoteFieldValuesListResponse withClinicalNoteFieldValuesList200ApplicationJsonObject(ClinicalNoteFieldValuesList200ApplicationJson clinicalNoteFieldValuesList200ApplicationJSONObject) {
        this.clinicalNoteFieldValuesList200ApplicationJSONObject = clinicalNoteFieldValuesList200ApplicationJSONObject;
        return this;
    }
}