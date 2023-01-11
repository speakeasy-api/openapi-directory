package openapisdk.models.operations;



public class PatientLabResultsCreateResponse {
    public String contentType;
    public PatientLabResultsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientLabResultSet patientLabResultSet;
    public PatientLabResultsCreateResponse withPatientLabResultSet(openapisdk.models.shared.PatientLabResultSet patientLabResultSet) {
        this.patientLabResultSet = patientLabResultSet;
        return this;
    }
    public Long statusCode;
    public PatientLabResultsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}