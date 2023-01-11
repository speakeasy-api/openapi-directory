package openapisdk.models.operations;



public class GetPackageFilterResponse {
    public String contentType;
    public GetPackageFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPackageFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getPackageFilterDefaultApplicationJSONString;
    public GetPackageFilterResponse withGetPackageFilterDefaultApplicationJsonString(String getPackageFilterDefaultApplicationJSONString) {
        this.getPackageFilterDefaultApplicationJSONString = getPackageFilterDefaultApplicationJSONString;
        return this;
    }
}