package openapisdk.models.operations;



public class GetVolumesJsonResponse {
    public String contentType;
    public GetVolumesJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVolumesJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] volumes;
    public GetVolumesJsonResponse withVolumes(Object[] volumes) {
        this.volumes = volumes;
        return this;
    }
}