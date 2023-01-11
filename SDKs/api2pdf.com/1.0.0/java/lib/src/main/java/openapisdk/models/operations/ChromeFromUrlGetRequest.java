package openapisdk.models.operations;



public class ChromeFromUrlGetRequest {
    public ChromeFromUrlGetQueryParams queryParams;
    public ChromeFromUrlGetRequest withQueryParams(ChromeFromUrlGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ChromeFromUrlGetSecurity security;
    public ChromeFromUrlGetRequest withSecurity(ChromeFromUrlGetSecurity security) {
        this.security = security;
        return this;
    }
}