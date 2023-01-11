package openapisdk.models.operations;



public class ImportationGetCustomColumnExpressionResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationGetCustomColumnExpressionResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationGetCustomColumnExpressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String importationGetCustomColumnExpression200ApplicationJSONString;
    public ImportationGetCustomColumnExpressionResponse withImportationGetCustomColumnExpression200ApplicationJsonString(String importationGetCustomColumnExpression200ApplicationJSONString) {
        this.importationGetCustomColumnExpression200ApplicationJSONString = importationGetCustomColumnExpression200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public ImportationGetCustomColumnExpressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}