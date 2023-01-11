package openapisdk.models.operations;



public class GetTimeResponse {
    public byte[] body;
    public GetTimeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTimeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTimeResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTimeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Long[] getTime2XXApplicationJSONIntegers;
    public GetTimeResponse withGetTime2XxApplicationJsonIntegers(Long[] getTime2XXApplicationJSONIntegers) {
        this.getTime2XXApplicationJSONIntegers = getTime2XXApplicationJSONIntegers;
        return this;
    }
    public String getTime2XXTextHTMLString;
    public GetTimeResponse withGetTime2XxTextHtmlString(String getTime2XXTextHTMLString) {
        this.getTime2XXTextHTMLString = getTime2XXTextHTMLString;
        return this;
    }
}