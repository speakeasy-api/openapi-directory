package openapisdk.models.operations;



public class PatientVaccineRecordsReadResponse {
    public String contentType;
    public PatientVaccineRecordsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientVaccineRecord patientVaccineRecord;
    public PatientVaccineRecordsReadResponse withPatientVaccineRecord(openapisdk.models.shared.PatientVaccineRecord patientVaccineRecord) {
        this.patientVaccineRecord = patientVaccineRecord;
        return this;
    }
    public Long statusCode;
    public PatientVaccineRecordsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}