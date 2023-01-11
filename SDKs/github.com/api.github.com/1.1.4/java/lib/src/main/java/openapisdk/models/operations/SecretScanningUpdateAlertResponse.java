package openapisdk.models.operations;



public class SecretScanningUpdateAlertResponse {
    public String contentType;
    public SecretScanningUpdateAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecretScanningUpdateAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SecretScanningAlert secretScanningAlert;
    public SecretScanningUpdateAlertResponse withSecretScanningAlert(openapisdk.models.shared.SecretScanningAlert secretScanningAlert) {
        this.secretScanningAlert = secretScanningAlert;
        return this;
    }
    public SecretScanningUpdateAlert503ApplicationJson secretScanningUpdateAlert503ApplicationJSONObject;
    public SecretScanningUpdateAlertResponse withSecretScanningUpdateAlert503ApplicationJsonObject(SecretScanningUpdateAlert503ApplicationJson secretScanningUpdateAlert503ApplicationJSONObject) {
        this.secretScanningUpdateAlert503ApplicationJSONObject = secretScanningUpdateAlert503ApplicationJSONObject;
        return this;
    }
}