package openapisdk.models.operations;



public class PostVolumesCreateResponse {
    public String contentType;
    public PostVolumesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVolumesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object volume;
    public PostVolumesCreateResponse withVolume(Object volume) {
        this.volume = volume;
        return this;
    }
}