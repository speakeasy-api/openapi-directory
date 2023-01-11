package openapisdk.models.operations;



public class AccessListResponse {
    public openapisdk.models.shared.AccessEntry[] accessEntries;
    public AccessListResponse withAccessEntries(openapisdk.models.shared.AccessEntry[] accessEntries) {
        this.accessEntries = accessEntries;
        return this;
    }
    public String contentType;
    public AccessListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccessListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}