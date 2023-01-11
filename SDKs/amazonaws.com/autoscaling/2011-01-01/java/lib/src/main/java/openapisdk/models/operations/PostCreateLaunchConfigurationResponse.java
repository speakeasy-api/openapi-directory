package openapisdk.models.operations;



public class PostCreateLaunchConfigurationResponse {
    public byte[] body;
    public PostCreateLaunchConfigurationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateLaunchConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateLaunchConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}