package openapisdk.models.operations;



public class GetOrganizationExportResponse {
    public String contentType;
    public GetOrganizationExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetOrganizationExportResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetOrganizationExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetOrganizationExport200ApplicationJson getOrganizationExport200ApplicationJSONObject;
    public GetOrganizationExportResponse withGetOrganizationExport200ApplicationJsonObject(GetOrganizationExport200ApplicationJson getOrganizationExport200ApplicationJSONObject) {
        this.getOrganizationExport200ApplicationJSONObject = getOrganizationExport200ApplicationJSONObject;
        return this;
    }
}