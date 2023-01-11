package openapisdk.models.operations;



public class CatalogComputeExpressionResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogComputeExpressionResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String catalogComputeExpression200ApplicationJSONString;
    public CatalogComputeExpressionResponse withCatalogComputeExpression200ApplicationJsonString(String catalogComputeExpression200ApplicationJSONString) {
        this.catalogComputeExpression200ApplicationJSONString = catalogComputeExpression200ApplicationJSONString;
        return this;
    }
    public String catalogComputeExpression400ApplicationJSONString;
    public CatalogComputeExpressionResponse withCatalogComputeExpression400ApplicationJsonString(String catalogComputeExpression400ApplicationJSONString) {
        this.catalogComputeExpression400ApplicationJSONString = catalogComputeExpression400ApplicationJSONString;
        return this;
    }
    public String contentType;
    public CatalogComputeExpressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogComputeExpressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}