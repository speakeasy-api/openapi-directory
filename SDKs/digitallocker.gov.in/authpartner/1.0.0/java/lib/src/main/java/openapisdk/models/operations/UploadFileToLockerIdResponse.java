package openapisdk.models.operations;



public class UploadFileToLockerIdResponse {
    public String contentType;
    public UploadFileToLockerIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileUploadResponse;
    public UploadFileToLockerIdResponse withFileUploadResponse(Object fileUploadResponse) {
        this.fileUploadResponse = fileUploadResponse;
        return this;
    }
    public Long statusCode;
    public UploadFileToLockerIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UploadFileToLockerId400ApplicationJson uploadFileToLockerId400ApplicationJSONObject;
    public UploadFileToLockerIdResponse withUploadFileToLockerId400ApplicationJsonObject(UploadFileToLockerId400ApplicationJson uploadFileToLockerId400ApplicationJSONObject) {
        this.uploadFileToLockerId400ApplicationJSONObject = uploadFileToLockerId400ApplicationJSONObject;
        return this;
    }
    public UploadFileToLockerId401ApplicationJson uploadFileToLockerId401ApplicationJSONObject;
    public UploadFileToLockerIdResponse withUploadFileToLockerId401ApplicationJsonObject(UploadFileToLockerId401ApplicationJson uploadFileToLockerId401ApplicationJSONObject) {
        this.uploadFileToLockerId401ApplicationJSONObject = uploadFileToLockerId401ApplicationJSONObject;
        return this;
    }
    public UploadFileToLockerId500ApplicationJson uploadFileToLockerId500ApplicationJSONObject;
    public UploadFileToLockerIdResponse withUploadFileToLockerId500ApplicationJsonObject(UploadFileToLockerId500ApplicationJson uploadFileToLockerId500ApplicationJSONObject) {
        this.uploadFileToLockerId500ApplicationJSONObject = uploadFileToLockerId500ApplicationJSONObject;
        return this;
    }
}