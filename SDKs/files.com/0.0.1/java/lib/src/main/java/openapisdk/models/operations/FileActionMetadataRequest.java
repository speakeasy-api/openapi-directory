package openapisdk.models.operations;



public class FileActionMetadataRequest {
    public FileActionMetadataPathParams pathParams;
    public FileActionMetadataRequest withPathParams(FileActionMetadataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileActionMetadataQueryParams queryParams;
    public FileActionMetadataRequest withQueryParams(FileActionMetadataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}