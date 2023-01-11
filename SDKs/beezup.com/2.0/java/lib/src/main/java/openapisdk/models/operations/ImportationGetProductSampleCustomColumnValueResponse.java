package openapisdk.models.operations;



public class ImportationGetProductSampleCustomColumnValueResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationGetProductSampleCustomColumnValueResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationGetProductSampleCustomColumnValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ImportationGetProductSampleCustomColumnValueResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public String importationGetProductSampleCustomColumnValue200ApplicationJSONString;
    public ImportationGetProductSampleCustomColumnValueResponse withImportationGetProductSampleCustomColumnValue200ApplicationJsonString(String importationGetProductSampleCustomColumnValue200ApplicationJSONString) {
        this.importationGetProductSampleCustomColumnValue200ApplicationJSONString = importationGetProductSampleCustomColumnValue200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public ImportationGetProductSampleCustomColumnValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}