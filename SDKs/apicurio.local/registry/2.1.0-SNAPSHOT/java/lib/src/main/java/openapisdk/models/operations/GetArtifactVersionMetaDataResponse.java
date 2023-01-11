package openapisdk.models.operations;



public class GetArtifactVersionMetaDataResponse {
    public String contentType;
    public GetArtifactVersionMetaDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetArtifactVersionMetaDataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetArtifactVersionMetaDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VersionMetaData versionMetaData;
    public GetArtifactVersionMetaDataResponse withVersionMetaData(openapisdk.models.shared.VersionMetaData versionMetaData) {
        this.versionMetaData = versionMetaData;
        return this;
    }
}