package openapisdk.models.operations;



public class PatientVaccineRecordsUpdateRequest {
    public PatientVaccineRecordsUpdatePathParams pathParams;
    public PatientVaccineRecordsUpdateRequest withPathParams(PatientVaccineRecordsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientVaccineRecordsUpdateQueryParams queryParams;
    public PatientVaccineRecordsUpdateRequest withQueryParams(PatientVaccineRecordsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientVaccineRecordsUpdateSecurity security;
    public PatientVaccineRecordsUpdateRequest withSecurity(PatientVaccineRecordsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}