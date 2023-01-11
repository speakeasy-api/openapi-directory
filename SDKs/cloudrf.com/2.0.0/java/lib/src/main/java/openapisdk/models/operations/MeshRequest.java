package openapisdk.models.operations;



public class MeshRequest {
    public MeshQueryParams queryParams;
    public MeshRequest withQueryParams(MeshQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeshSecurity security;
    public MeshRequest withSecurity(MeshSecurity security) {
        this.security = security;
        return this;
    }
}