package openapisdk.models.operations;



public class LocaleGetCurrenciesResponse {
    public String contentType;
    public LocaleGetCurrenciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocaleGetCurrenciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CurrencyList currencyList;
    public LocaleGetCurrenciesResponse withCurrencyList(openapisdk.models.shared.CurrencyList currencyList) {
        this.currencyList = currencyList;
        return this;
    }
}