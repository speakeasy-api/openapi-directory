package openapisdk.models.operations;



public class PatientVaccineRecordsListRequest {
    public PatientVaccineRecordsListQueryParams queryParams;
    public PatientVaccineRecordsListRequest withQueryParams(PatientVaccineRecordsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientVaccineRecordsListSecurity security;
    public PatientVaccineRecordsListRequest withSecurity(PatientVaccineRecordsListSecurity security) {
        this.security = security;
        return this;
    }
}