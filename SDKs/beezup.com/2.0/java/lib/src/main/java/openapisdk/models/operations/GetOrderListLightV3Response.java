package openapisdk.models.operations;



public class GetOrderListLightV3Response {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetOrderListLightV3Response withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetOrderListLightV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrderListLightV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetOrderListLightV3Response withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
    public openapisdk.models.shared.OrderListLightWithLinks orderListLightWithLinks;
    public GetOrderListLightV3Response withOrderListLightWithLinks(openapisdk.models.shared.OrderListLightWithLinks orderListLightWithLinks) {
        this.orderListLightWithLinks = orderListLightWithLinks;
        return this;
    }
}