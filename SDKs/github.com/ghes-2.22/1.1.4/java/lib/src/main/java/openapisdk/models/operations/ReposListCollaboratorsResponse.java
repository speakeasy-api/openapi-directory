package openapisdk.models.operations;



public class ReposListCollaboratorsResponse {
    public String contentType;
    public ReposListCollaboratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListCollaboratorsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListCollaboratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListCollaboratorsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Collaborator[] collaborators;
    public ReposListCollaboratorsResponse withCollaborators(openapisdk.models.shared.Collaborator[] collaborators) {
        this.collaborators = collaborators;
        return this;
    }
}