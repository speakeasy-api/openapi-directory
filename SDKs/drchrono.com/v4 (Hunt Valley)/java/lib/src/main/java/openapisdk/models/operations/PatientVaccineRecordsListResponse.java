package openapisdk.models.operations;



public class PatientVaccineRecordsListResponse {
    public String contentType;
    public PatientVaccineRecordsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientVaccineRecordsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientVaccineRecordsList200ApplicationJson patientVaccineRecordsList200ApplicationJSONObject;
    public PatientVaccineRecordsListResponse withPatientVaccineRecordsList200ApplicationJsonObject(PatientVaccineRecordsList200ApplicationJson patientVaccineRecordsList200ApplicationJSONObject) {
        this.patientVaccineRecordsList200ApplicationJSONObject = patientVaccineRecordsList200ApplicationJSONObject;
        return this;
    }
}