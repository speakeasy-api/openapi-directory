package openapisdk.models.operations;



public class ClinicalNoteTemplatesListResponse {
    public String contentType;
    public ClinicalNoteTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClinicalNoteTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ClinicalNoteTemplatesList200ApplicationJson clinicalNoteTemplatesList200ApplicationJSONObject;
    public ClinicalNoteTemplatesListResponse withClinicalNoteTemplatesList200ApplicationJsonObject(ClinicalNoteTemplatesList200ApplicationJson clinicalNoteTemplatesList200ApplicationJSONObject) {
        this.clinicalNoteTemplatesList200ApplicationJSONObject = clinicalNoteTemplatesList200ApplicationJSONObject;
        return this;
    }
}