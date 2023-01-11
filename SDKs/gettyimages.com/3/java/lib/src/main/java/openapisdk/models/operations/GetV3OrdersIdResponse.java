package openapisdk.models.operations;



public class GetV3OrdersIdResponse {
    public String contentType;
    public GetV3OrdersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderDetail orderDetail;
    public GetV3OrdersIdResponse withOrderDetail(openapisdk.models.shared.OrderDetail orderDetail) {
        this.orderDetail = orderDetail;
        return this;
    }
    public Long statusCode;
    public GetV3OrdersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}