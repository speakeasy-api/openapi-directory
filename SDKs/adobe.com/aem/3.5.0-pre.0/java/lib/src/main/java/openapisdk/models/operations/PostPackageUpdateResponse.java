package openapisdk.models.operations;



public class PostPackageUpdateResponse {
    public String contentType;
    public PostPackageUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPackageUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String postPackageUpdateDefaultApplicationJSONString;
    public PostPackageUpdateResponse withPostPackageUpdateDefaultApplicationJsonString(String postPackageUpdateDefaultApplicationJSONString) {
        this.postPackageUpdateDefaultApplicationJSONString = postPackageUpdateDefaultApplicationJSONString;
        return this;
    }
}