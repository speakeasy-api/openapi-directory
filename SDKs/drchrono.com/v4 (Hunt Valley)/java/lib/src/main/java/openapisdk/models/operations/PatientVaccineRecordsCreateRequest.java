package openapisdk.models.operations;



public class PatientVaccineRecordsCreateRequest {
    public PatientVaccineRecordsCreateQueryParams queryParams;
    public PatientVaccineRecordsCreateRequest withQueryParams(PatientVaccineRecordsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientVaccineRecordsCreateSecurity security;
    public PatientVaccineRecordsCreateRequest withSecurity(PatientVaccineRecordsCreateSecurity security) {
        this.security = security;
        return this;
    }
}