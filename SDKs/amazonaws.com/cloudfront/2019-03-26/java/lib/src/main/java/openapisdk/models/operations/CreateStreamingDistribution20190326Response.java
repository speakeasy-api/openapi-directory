package openapisdk.models.operations;



public class CreateStreamingDistribution20190326Response {
    public byte[] body;
    public CreateStreamingDistribution20190326Response withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateStreamingDistribution20190326Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateStreamingDistribution20190326Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}