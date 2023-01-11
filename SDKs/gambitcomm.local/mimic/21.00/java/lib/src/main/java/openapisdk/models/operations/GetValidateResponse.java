package openapisdk.models.operations;



public class GetValidateResponse {
    public String contentType;
    public GetValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getValidate200ApplicationJSONInt32Integer;
    public GetValidateResponse withGetValidate200ApplicationJsonInt32Integer(Integer getValidate200ApplicationJSONInt32Integer) {
        this.getValidate200ApplicationJSONInt32Integer = getValidate200ApplicationJSONInt32Integer;
        return this;
    }
}