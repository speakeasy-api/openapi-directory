package openapisdk.models.operations;



public class PatientsCcdaRequest {
    public PatientsCcdaPathParams pathParams;
    public PatientsCcdaRequest withPathParams(PatientsCcdaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsCcdaQueryParams queryParams;
    public PatientsCcdaRequest withQueryParams(PatientsCcdaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsCcdaSecurity security;
    public PatientsCcdaRequest withSecurity(PatientsCcdaSecurity security) {
        this.security = security;
        return this;
    }
}