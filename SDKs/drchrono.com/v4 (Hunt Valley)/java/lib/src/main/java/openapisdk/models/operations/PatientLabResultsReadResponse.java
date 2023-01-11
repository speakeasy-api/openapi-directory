package openapisdk.models.operations;



public class PatientLabResultsReadResponse {
    public String contentType;
    public PatientLabResultsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientLabResultSet patientLabResultSet;
    public PatientLabResultsReadResponse withPatientLabResultSet(openapisdk.models.shared.PatientLabResultSet patientLabResultSet) {
        this.patientLabResultSet = patientLabResultSet;
        return this;
    }
    public Long statusCode;
    public PatientLabResultsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}