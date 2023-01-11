package openapisdk.models.operations;



public class MedicationsCreateRequest {
    public MedicationsCreateQueryParams queryParams;
    public MedicationsCreateRequest withQueryParams(MedicationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MedicationsCreateSecurity security;
    public MedicationsCreateRequest withSecurity(MedicationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}