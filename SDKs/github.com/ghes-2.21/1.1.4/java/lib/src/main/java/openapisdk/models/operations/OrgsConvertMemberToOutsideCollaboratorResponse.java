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
    public java.util.Map<String, Object> orgsConvertMemberToOutsideCollaborator202ApplicationJSONObject;
    public OrgsConvertMemberToOutsideCollaboratorResponse withOrgsConvertMemberToOutsideCollaborator202ApplicationJsonObject(java.util.Map<String, Object> orgsConvertMemberToOutsideCollaborator202ApplicationJSONObject) {
        this.orgsConvertMemberToOutsideCollaborator202ApplicationJSONObject = orgsConvertMemberToOutsideCollaborator202ApplicationJSONObject;
        return this;
    }
}