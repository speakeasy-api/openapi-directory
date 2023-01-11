package openapisdk.models.operations;



public class MedicationsPartialUpdateRequest {
    public MedicationsPartialUpdatePathParams pathParams;
    public MedicationsPartialUpdateRequest withPathParams(MedicationsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MedicationsPartialUpdateQueryParams queryParams;
    public MedicationsPartialUpdateRequest withQueryParams(MedicationsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MedicationsPartialUpdateSecurity security;
    public MedicationsPartialUpdateRequest withSecurity(MedicationsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}