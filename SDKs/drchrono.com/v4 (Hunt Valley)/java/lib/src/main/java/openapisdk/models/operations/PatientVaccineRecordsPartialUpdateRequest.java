package openapisdk.models.operations;



public class PatientVaccineRecordsPartialUpdateRequest {
    public PatientVaccineRecordsPartialUpdatePathParams pathParams;
    public PatientVaccineRecordsPartialUpdateRequest withPathParams(PatientVaccineRecordsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientVaccineRecordsPartialUpdateQueryParams queryParams;
    public PatientVaccineRecordsPartialUpdateRequest withQueryParams(PatientVaccineRecordsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientVaccineRecordsPartialUpdateSecurity security;
    public PatientVaccineRecordsPartialUpdateRequest withSecurity(PatientVaccineRecordsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}