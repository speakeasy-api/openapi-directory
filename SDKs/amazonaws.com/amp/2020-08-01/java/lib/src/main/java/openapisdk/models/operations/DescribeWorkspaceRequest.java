package openapisdk.models.operations;



public class DescribeWorkspaceRequest {
    public DescribeWorkspacePathParams pathParams;
    public DescribeWorkspaceRequest withPathParams(DescribeWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeWorkspaceHeaders headers;
    public DescribeWorkspaceRequest withHeaders(DescribeWorkspaceHeaders headers) {
        this.headers = headers;
        return this;
    }
}