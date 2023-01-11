package openapisdk.models.operations;



public class ListCompatibleImagesResponse {
    public String contentType;
    public ListCompatibleImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object ec2RequestFailedException;
    public ListCompatibleImagesResponse withEc2RequestFailedException(Object ec2RequestFailedException) {
        this.ec2RequestFailedException = ec2RequestFailedException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCompatibleImagesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListCompatibleImagesResult listCompatibleImagesResult;
    public ListCompatibleImagesResponse withListCompatibleImagesResult(openapisdk.models.shared.ListCompatibleImagesResult listCompatibleImagesResult) {
        this.listCompatibleImagesResult = listCompatibleImagesResult;
        return this;
    }
    public Long statusCode;
    public ListCompatibleImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}