package openapisdk.models.operations;



public class NtltrResponse {
    public String contentType;
    public NtltrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NtltrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Ntltr400ApplicationJson ntltr400ApplicationJSONObject;
    public NtltrResponse withNtltr400ApplicationJsonObject(Ntltr400ApplicationJson ntltr400ApplicationJSONObject) {
        this.ntltr400ApplicationJSONObject = ntltr400ApplicationJSONObject;
        return this;
    }
    public Ntltr401ApplicationJson ntltr401ApplicationJSONObject;
    public NtltrResponse withNtltr401ApplicationJsonObject(Ntltr401ApplicationJson ntltr401ApplicationJSONObject) {
        this.ntltr401ApplicationJSONObject = ntltr401ApplicationJSONObject;
        return this;
    }
    public Ntltr404ApplicationJson ntltr404ApplicationJSONObject;
    public NtltrResponse withNtltr404ApplicationJsonObject(Ntltr404ApplicationJson ntltr404ApplicationJSONObject) {
        this.ntltr404ApplicationJSONObject = ntltr404ApplicationJSONObject;
        return this;
    }
    public Ntltr500ApplicationJson ntltr500ApplicationJSONObject;
    public NtltrResponse withNtltr500ApplicationJsonObject(Ntltr500ApplicationJson ntltr500ApplicationJSONObject) {
        this.ntltr500ApplicationJSONObject = ntltr500ApplicationJSONObject;
        return this;
    }
    public Ntltr502ApplicationJson ntltr502ApplicationJSONObject;
    public NtltrResponse withNtltr502ApplicationJsonObject(Ntltr502ApplicationJson ntltr502ApplicationJSONObject) {
        this.ntltr502ApplicationJSONObject = ntltr502ApplicationJSONObject;
        return this;
    }
    public Ntltr503ApplicationJson ntltr503ApplicationJSONObject;
    public NtltrResponse withNtltr503ApplicationJsonObject(Ntltr503ApplicationJson ntltr503ApplicationJSONObject) {
        this.ntltr503ApplicationJSONObject = ntltr503ApplicationJSONObject;
        return this;
    }
    public Ntltr504ApplicationJson ntltr504ApplicationJSONObject;
    public NtltrResponse withNtltr504ApplicationJsonObject(Ntltr504ApplicationJson ntltr504ApplicationJSONObject) {
        this.ntltr504ApplicationJSONObject = ntltr504ApplicationJSONObject;
        return this;
    }
}