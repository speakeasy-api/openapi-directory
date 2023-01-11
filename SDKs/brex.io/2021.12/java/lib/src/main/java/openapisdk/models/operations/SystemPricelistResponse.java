package openapisdk.models.operations;



public class SystemPricelistResponse {
    public String contentType;
    public SystemPricelistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SystemPricelistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] systemPricelist200ApplicationJSONAnies;
    public SystemPricelistResponse withSystemPricelist200ApplicationJsonAnies(Object[] systemPricelist200ApplicationJSONAnies) {
        this.systemPricelist200ApplicationJSONAnies = systemPricelist200ApplicationJSONAnies;
        return this;
    }
    public Object systemPricelistDefaultApplicationJSONAny;
    public SystemPricelistResponse withSystemPricelistDefaultApplicationJsonAny(Object systemPricelistDefaultApplicationJSONAny) {
        this.systemPricelistDefaultApplicationJSONAny = systemPricelistDefaultApplicationJSONAny;
        return this;
    }
}