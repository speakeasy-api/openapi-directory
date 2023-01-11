package openapisdk.models.operations;



public class MedicationsListRequest {
    public MedicationsListQueryParams queryParams;
    public MedicationsListRequest withQueryParams(MedicationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MedicationsListSecurity security;
    public MedicationsListRequest withSecurity(MedicationsListSecurity security) {
        this.security = security;
        return this;
    }
}