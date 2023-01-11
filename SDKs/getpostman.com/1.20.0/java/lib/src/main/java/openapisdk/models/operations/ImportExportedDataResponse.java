package openapisdk.models.operations;



public class ImportExportedDataResponse {
    public String contentType;
    public ImportExportedDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportExportedDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ImportExportedData200ApplicationJson importExportedData200ApplicationJSONObject;
    public ImportExportedDataResponse withImportExportedData200ApplicationJsonObject(ImportExportedData200ApplicationJson importExportedData200ApplicationJSONObject) {
        this.importExportedData200ApplicationJSONObject = importExportedData200ApplicationJSONObject;
        return this;
    }
    public ImportExportedData400ApplicationJson importExportedData400ApplicationJSONObject;
    public ImportExportedDataResponse withImportExportedData400ApplicationJsonObject(ImportExportedData400ApplicationJson importExportedData400ApplicationJSONObject) {
        this.importExportedData400ApplicationJSONObject = importExportedData400ApplicationJSONObject;
        return this;
    }
}