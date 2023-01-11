package openapisdk.models.operations;



public class LocaleGetCountriesPhonesResponse {
    public String contentType;
    public LocaleGetCountriesPhonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocaleGetCountriesPhonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PhoneList phoneList;
    public LocaleGetCountriesPhonesResponse withPhoneList(openapisdk.models.shared.PhoneList phoneList) {
        this.phoneList = phoneList;
        return this;
    }
}