package openapisdk.models.operations;



public class ImportExternalApiSpecificationResponse {
    public String contentType;
    public ImportExternalApiSpecificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportExternalApiSpecificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ImportExternalApiSpecification200ApplicationJson importExternalApiSpecification200ApplicationJSONObject;
    public ImportExternalApiSpecificationResponse withImportExternalApiSpecification200ApplicationJsonObject(ImportExternalApiSpecification200ApplicationJson importExternalApiSpecification200ApplicationJSONObject) {
        this.importExternalApiSpecification200ApplicationJSONObject = importExternalApiSpecification200ApplicationJSONObject;
        return this;
    }
    public ImportExternalApiSpecification400ApplicationJson importExternalApiSpecification400ApplicationJSONObject;
    public ImportExternalApiSpecificationResponse withImportExternalApiSpecification400ApplicationJsonObject(ImportExternalApiSpecification400ApplicationJson importExternalApiSpecification400ApplicationJSONObject) {
        this.importExternalApiSpecification400ApplicationJSONObject = importExternalApiSpecification400ApplicationJSONObject;
        return this;
    }
}