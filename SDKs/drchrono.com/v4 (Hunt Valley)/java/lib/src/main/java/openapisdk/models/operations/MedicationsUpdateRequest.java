package openapisdk.models.operations;



public class MedicationsUpdateRequest {
    public MedicationsUpdatePathParams pathParams;
    public MedicationsUpdateRequest withPathParams(MedicationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MedicationsUpdateQueryParams queryParams;
    public MedicationsUpdateRequest withQueryParams(MedicationsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MedicationsUpdateSecurity security;
    public MedicationsUpdateRequest withSecurity(MedicationsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}