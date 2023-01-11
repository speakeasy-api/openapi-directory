package openapisdk.models.operations;



public class GetRadAnalystResponse {
    public String contentType;
    public GetRadAnalystResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RadAnalystPage radAnalystPage;
    public GetRadAnalystResponse withRadAnalystPage(openapisdk.models.shared.RadAnalystPage radAnalystPage) {
        this.radAnalystPage = radAnalystPage;
        return this;
    }
    public Long statusCode;
    public GetRadAnalystResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}