package openapisdk.models.operations;



public class BinLookupResponse {
    public String contentType;
    public BinLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseItem[] responseItems;
    public BinLookupResponse withResponseItems(openapisdk.models.shared.ResponseItem[] responseItems) {
        this.responseItems = responseItems;
        return this;
    }
    public Long statusCode;
    public BinLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}