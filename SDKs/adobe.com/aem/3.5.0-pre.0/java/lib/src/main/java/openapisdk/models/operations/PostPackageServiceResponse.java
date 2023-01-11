package openapisdk.models.operations;



public class PostPackageServiceResponse {
    public String contentType;
    public PostPackageServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPackageServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String postPackageServiceDefaultTextXMLString;
    public PostPackageServiceResponse withPostPackageServiceDefaultTextXmlString(String postPackageServiceDefaultTextXMLString) {
        this.postPackageServiceDefaultTextXMLString = postPackageServiceDefaultTextXMLString;
        return this;
    }
}