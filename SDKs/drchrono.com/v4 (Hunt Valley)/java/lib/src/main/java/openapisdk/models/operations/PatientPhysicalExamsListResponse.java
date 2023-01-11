package openapisdk.models.operations;



public class PatientPhysicalExamsListResponse {
    public String contentType;
    public PatientPhysicalExamsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientPhysicalExamsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientPhysicalExamsList200ApplicationJson patientPhysicalExamsList200ApplicationJSONObject;
    public PatientPhysicalExamsListResponse withPatientPhysicalExamsList200ApplicationJsonObject(PatientPhysicalExamsList200ApplicationJson patientPhysicalExamsList200ApplicationJSONObject) {
        this.patientPhysicalExamsList200ApplicationJSONObject = patientPhysicalExamsList200ApplicationJSONObject;
        return this;
    }
}