package openapisdk.models.operations;



public class ImportationIgnoreColumnResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationIgnoreColumnResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationIgnoreColumnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationIgnoreColumnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}