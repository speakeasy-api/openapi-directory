package openapisdk.models.operations;



public class GetCrxdeStatusResponse {
    public String contentType;
    public GetCrxdeStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCrxdeStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getCrxdeStatus200PlainTextString;
    public GetCrxdeStatusResponse withGetCrxdeStatus200PlainTextString(String getCrxdeStatus200PlainTextString) {
        this.getCrxdeStatus200PlainTextString = getCrxdeStatus200PlainTextString;
        return this;
    }
    public String getCrxdeStatus404PlainTextString;
    public GetCrxdeStatusResponse withGetCrxdeStatus404PlainTextString(String getCrxdeStatus404PlainTextString) {
        this.getCrxdeStatus404PlainTextString = getCrxdeStatus404PlainTextString;
        return this;
    }
}