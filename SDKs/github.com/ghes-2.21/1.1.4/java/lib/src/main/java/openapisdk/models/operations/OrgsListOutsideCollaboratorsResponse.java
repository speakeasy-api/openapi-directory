package openapisdk.models.operations;



public class OrgsListOutsideCollaboratorsResponse {
    public String contentType;
    public OrgsListOutsideCollaboratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListOutsideCollaboratorsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListOutsideCollaboratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SimpleUser[] simpleUsers;
    public OrgsListOutsideCollaboratorsResponse withSimpleUsers(openapisdk.models.shared.SimpleUser[] simpleUsers) {
        this.simpleUsers = simpleUsers;
        return this;
    }
}