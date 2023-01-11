package openapisdk.models.operations;



public class OrgsUpdateResponse {
    public String contentType;
    public OrgsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsUpdateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrganizationFull organizationFull;
    public OrgsUpdateResponse withOrganizationFull(openapisdk.models.shared.OrganizationFull organizationFull) {
        this.organizationFull = organizationFull;
        return this;
    }
    public OrgsUpdate415ApplicationJson orgsUpdate415ApplicationJSONObject;
    public OrgsUpdateResponse withOrgsUpdate415ApplicationJsonObject(OrgsUpdate415ApplicationJson orgsUpdate415ApplicationJSONObject) {
        this.orgsUpdate415ApplicationJSONObject = orgsUpdate415ApplicationJSONObject;
        return this;
    }
    public Object orgsUpdate422ApplicationJSONOneOf;
    public OrgsUpdateResponse withOrgsUpdate422ApplicationJsonOneOf(Object orgsUpdate422ApplicationJSONOneOf) {
        this.orgsUpdate422ApplicationJSONOneOf = orgsUpdate422ApplicationJSONOneOf;
        return this;
    }
}