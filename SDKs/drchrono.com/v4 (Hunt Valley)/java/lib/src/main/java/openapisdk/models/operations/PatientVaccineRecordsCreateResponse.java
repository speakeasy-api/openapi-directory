package openapisdk.models.operations;



public class PatientVaccineRecordsCreateResponse {
    public String contentType;
    public PatientVaccineRecordsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientVaccineRecord patientVaccineRecord;
    public PatientVaccineRecordsCreateResponse withPatientVaccineRecord(openapisdk.models.shared.PatientVaccineRecord patientVaccineRecord) {
        this.patientVaccineRecord = patientVaccineRecord;
        return this;
    }
    public Long statusCode;
    public PatientVaccineRecordsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}