package openapisdk.models.operations;



public class CreateOrganizationExportResponse {
    public String contentType;
    public CreateOrganizationExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateOrganizationExportResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateOrganizationExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateOrganizationExport201ApplicationJson createOrganizationExport201ApplicationJSONObject;
    public CreateOrganizationExportResponse withCreateOrganizationExport201ApplicationJsonObject(CreateOrganizationExport201ApplicationJson createOrganizationExport201ApplicationJSONObject) {
        this.createOrganizationExport201ApplicationJSONObject = createOrganizationExport201ApplicationJSONObject;
        return this;
    }
}