package openapisdk.models.operations;



public class PrescriptionMessagesReadRequest {
    public PrescriptionMessagesReadPathParams pathParams;
    public PrescriptionMessagesReadRequest withPathParams(PrescriptionMessagesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrescriptionMessagesReadQueryParams queryParams;
    public PrescriptionMessagesReadRequest withQueryParams(PrescriptionMessagesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrescriptionMessagesReadSecurity security;
    public PrescriptionMessagesReadRequest withSecurity(PrescriptionMessagesReadSecurity security) {
        this.security = security;
        return this;
    }
}