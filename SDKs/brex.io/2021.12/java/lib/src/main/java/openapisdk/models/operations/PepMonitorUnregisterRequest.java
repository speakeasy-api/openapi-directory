package openapisdk.models.operations;



public class PepMonitorUnregisterRequest {
    public PepMonitorUnregisterPathParams pathParams;
    public PepMonitorUnregisterRequest withPathParams(PepMonitorUnregisterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PepMonitorUnregisterSecurity security;
    public PepMonitorUnregisterRequest withSecurity(PepMonitorUnregisterSecurity security) {
        this.security = security;
        return this;
    }
}