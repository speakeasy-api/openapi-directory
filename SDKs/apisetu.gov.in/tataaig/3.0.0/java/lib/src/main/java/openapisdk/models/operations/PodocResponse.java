package openapisdk.models.operations;



public class PodocResponse {
    public String contentType;
    public PodocResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PodocResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Podoc400ApplicationJson podoc400ApplicationJSONObject;
    public PodocResponse withPodoc400ApplicationJsonObject(Podoc400ApplicationJson podoc400ApplicationJSONObject) {
        this.podoc400ApplicationJSONObject = podoc400ApplicationJSONObject;
        return this;
    }
    public Podoc401ApplicationJson podoc401ApplicationJSONObject;
    public PodocResponse withPodoc401ApplicationJsonObject(Podoc401ApplicationJson podoc401ApplicationJSONObject) {
        this.podoc401ApplicationJSONObject = podoc401ApplicationJSONObject;
        return this;
    }
    public Podoc404ApplicationJson podoc404ApplicationJSONObject;
    public PodocResponse withPodoc404ApplicationJsonObject(Podoc404ApplicationJson podoc404ApplicationJSONObject) {
        this.podoc404ApplicationJSONObject = podoc404ApplicationJSONObject;
        return this;
    }
    public Podoc500ApplicationJson podoc500ApplicationJSONObject;
    public PodocResponse withPodoc500ApplicationJsonObject(Podoc500ApplicationJson podoc500ApplicationJSONObject) {
        this.podoc500ApplicationJSONObject = podoc500ApplicationJSONObject;
        return this;
    }
    public Podoc502ApplicationJson podoc502ApplicationJSONObject;
    public PodocResponse withPodoc502ApplicationJsonObject(Podoc502ApplicationJson podoc502ApplicationJSONObject) {
        this.podoc502ApplicationJSONObject = podoc502ApplicationJSONObject;
        return this;
    }
    public Podoc503ApplicationJson podoc503ApplicationJSONObject;
    public PodocResponse withPodoc503ApplicationJsonObject(Podoc503ApplicationJson podoc503ApplicationJSONObject) {
        this.podoc503ApplicationJSONObject = podoc503ApplicationJSONObject;
        return this;
    }
    public Podoc504ApplicationJson podoc504ApplicationJSONObject;
    public PodocResponse withPodoc504ApplicationJsonObject(Podoc504ApplicationJson podoc504ApplicationJSONObject) {
        this.podoc504ApplicationJSONObject = podoc504ApplicationJSONObject;
        return this;
    }
}