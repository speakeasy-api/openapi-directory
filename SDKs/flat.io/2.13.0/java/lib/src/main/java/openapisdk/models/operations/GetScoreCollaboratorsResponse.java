package openapisdk.models.operations;



public class GetScoreCollaboratorsResponse {
    public String contentType;
    public GetScoreCollaboratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetScoreCollaboratorsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceCollaborator[] resourceCollaborators;
    public GetScoreCollaboratorsResponse withResourceCollaborators(openapisdk.models.shared.ResourceCollaborator[] resourceCollaborators) {
        this.resourceCollaborators = resourceCollaborators;
        return this;
    }
    public Long statusCode;
    public GetScoreCollaboratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}