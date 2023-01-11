package openapisdk.models.operations;



public class GetArtifactVersionMetaDataByContentResponse {
    public String contentType;
    public GetArtifactVersionMetaDataByContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetArtifactVersionMetaDataByContentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetArtifactVersionMetaDataByContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VersionMetaData versionMetaData;
    public GetArtifactVersionMetaDataByContentResponse withVersionMetaData(openapisdk.models.shared.VersionMetaData versionMetaData) {
        this.versionMetaData = versionMetaData;
        return this;
    }
}