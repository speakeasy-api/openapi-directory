package openapisdk.models.operations;



public class CatalogGetCustomColumnExpressionResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogGetCustomColumnExpressionResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String catalogGetCustomColumnExpression200ApplicationJSONString;
    public CatalogGetCustomColumnExpressionResponse withCatalogGetCustomColumnExpression200ApplicationJsonString(String catalogGetCustomColumnExpression200ApplicationJSONString) {
        this.catalogGetCustomColumnExpression200ApplicationJSONString = catalogGetCustomColumnExpression200ApplicationJSONString;
        return this;
    }
    public String contentType;
    public CatalogGetCustomColumnExpressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogGetCustomColumnExpressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}