package openapisdk.models.operations;



public class OrgsConvertMemberToOutsideCollaboratorResponse {
    public String contentType;
    public OrgsConvertMemberToOutsideCollaboratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsConvertMemberToOutsideCollaboratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsConvertMemberToOutsideCollaboratorResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public OrgsConvertMemberToOutsideCollaborator403ApplicationJson orgsConvertMemberToOutsideCollaborator403ApplicationJSONObject;
    public OrgsConvertMemberToOutsideCollaboratorResponse withOrgsConvertMemberToOutsideCollaborator403ApplicationJsonObject(OrgsConvertMemberToOutsideCollaborator403ApplicationJson orgsConvertMemberToOutsideCollaborator403ApplicationJSONObject) {
        this.orgsConvertMemberToOutsideCollaborator403ApplicationJSONObject = orgsConvertMemberToOutsideCollaborator403ApplicationJSONObject;
        return this;
    }
}