package openapisdk.models.operations;



public class OrgsRemoveOutsideCollaboratorResponse {
    public String contentType;
    public OrgsRemoveOutsideCollaboratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsRemoveOutsideCollaboratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public OrgsRemoveOutsideCollaborator422ApplicationJson orgsRemoveOutsideCollaborator422ApplicationJSONObject;
    public OrgsRemoveOutsideCollaboratorResponse withOrgsRemoveOutsideCollaborator422ApplicationJsonObject(OrgsRemoveOutsideCollaborator422ApplicationJson orgsRemoveOutsideCollaborator422ApplicationJSONObject) {
        this.orgsRemoveOutsideCollaborator422ApplicationJSONObject = orgsRemoveOutsideCollaborator422ApplicationJSONObject;
        return this;
    }
}