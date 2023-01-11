package openapisdk.models.operations;



public class PrescriptionMessagesListRequest {
    public PrescriptionMessagesListQueryParams queryParams;
    public PrescriptionMessagesListRequest withQueryParams(PrescriptionMessagesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrescriptionMessagesListSecurity security;
    public PrescriptionMessagesListRequest withSecurity(PrescriptionMessagesListSecurity security) {
        this.security = security;
        return this;
    }
}