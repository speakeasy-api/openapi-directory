package openapisdk.models.operations;



public class OptionsErc20Response {
    public String contentType;
    public OptionsErc20Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsErc20Response withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsErc20Response withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsErc20Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}