package openapisdk.models.operations;



public class RebuildWorkspacesResponse {
    public String contentType;
    public RebuildWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RebuildWorkspacesResult rebuildWorkspacesResult;
    public RebuildWorkspacesResponse withRebuildWorkspacesResult(openapisdk.models.shared.RebuildWorkspacesResult rebuildWorkspacesResult) {
        this.rebuildWorkspacesResult = rebuildWorkspacesResult;
        return this;
    }
    public Long statusCode;
    public RebuildWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}