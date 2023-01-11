package openapisdk.models.operations;



public class PatientMessagesPartialUpdateRequest {
    public PatientMessagesPartialUpdatePathParams pathParams;
    public PatientMessagesPartialUpdateRequest withPathParams(PatientMessagesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientMessagesPartialUpdateQueryParams queryParams;
    public PatientMessagesPartialUpdateRequest withQueryParams(PatientMessagesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientMessagesPartialUpdateSecurity security;
    public PatientMessagesPartialUpdateRequest withSecurity(PatientMessagesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}