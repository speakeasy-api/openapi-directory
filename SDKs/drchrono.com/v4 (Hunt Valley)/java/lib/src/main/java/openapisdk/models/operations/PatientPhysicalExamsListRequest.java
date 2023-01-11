package openapisdk.models.operations;



public class PatientPhysicalExamsListRequest {
    public PatientPhysicalExamsListQueryParams queryParams;
    public PatientPhysicalExamsListRequest withQueryParams(PatientPhysicalExamsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPhysicalExamsListSecurity security;
    public PatientPhysicalExamsListRequest withSecurity(PatientPhysicalExamsListSecurity security) {
        this.security = security;
        return this;
    }
}