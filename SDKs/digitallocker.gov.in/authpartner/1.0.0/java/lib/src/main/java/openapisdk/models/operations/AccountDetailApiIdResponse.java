package openapisdk.models.operations;



public class AccountDetailApiIdResponse {
    public AccountDetailApiId401ApplicationJson accountDetailAPIId401ApplicationJSONObject;
    public AccountDetailApiIdResponse withAccountDetailApiId401ApplicationJsonObject(AccountDetailApiId401ApplicationJson accountDetailAPIId401ApplicationJSONObject) {
        this.accountDetailAPIId401ApplicationJSONObject = accountDetailAPIId401ApplicationJSONObject;
        return this;
    }
    public AccountDetailApiId500ApplicationJson accountDetailAPIId500ApplicationJSONObject;
    public AccountDetailApiIdResponse withAccountDetailApiId500ApplicationJsonObject(AccountDetailApiId500ApplicationJson accountDetailAPIId500ApplicationJSONObject) {
        this.accountDetailAPIId500ApplicationJSONObject = accountDetailAPIId500ApplicationJSONObject;
        return this;
    }
    public String contentType;
    public AccountDetailApiIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object sample;
    public AccountDetailApiIdResponse withSample(Object sample) {
        this.sample = sample;
        return this;
    }
    public Long statusCode;
    public AccountDetailApiIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}