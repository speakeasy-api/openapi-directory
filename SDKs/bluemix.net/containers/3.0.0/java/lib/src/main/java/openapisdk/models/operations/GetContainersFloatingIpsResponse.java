package openapisdk.models.operations;



public class GetContainersFloatingIpsResponse {
    public String contentType;
    public GetContainersFloatingIpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] floatingIPS;
    public GetContainersFloatingIpsResponse withFloatingIps(Object[] floatingIPS) {
        this.floatingIPS = floatingIPS;
        return this;
    }
    public Long statusCode;
    public GetContainersFloatingIpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}