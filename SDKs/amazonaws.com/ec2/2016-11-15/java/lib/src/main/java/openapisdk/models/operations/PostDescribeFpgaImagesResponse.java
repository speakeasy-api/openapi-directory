package openapisdk.models.operations;



public class PostDescribeFpgaImagesResponse {
    public byte[] body;
    public PostDescribeFpgaImagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeFpgaImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeFpgaImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}