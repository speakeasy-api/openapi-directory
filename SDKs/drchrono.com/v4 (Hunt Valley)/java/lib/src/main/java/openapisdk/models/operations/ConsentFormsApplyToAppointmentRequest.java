package openapisdk.models.operations;



public class ConsentFormsApplyToAppointmentRequest {
    public ConsentFormsApplyToAppointmentPathParams pathParams;
    public ConsentFormsApplyToAppointmentRequest withPathParams(ConsentFormsApplyToAppointmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConsentFormsApplyToAppointmentQueryParams queryParams;
    public ConsentFormsApplyToAppointmentRequest withQueryParams(ConsentFormsApplyToAppointmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ConsentFormsApplyToAppointmentSecurity security;
    public ConsentFormsApplyToAppointmentRequest withSecurity(ConsentFormsApplyToAppointmentSecurity security) {
        this.security = security;
        return this;
    }
}