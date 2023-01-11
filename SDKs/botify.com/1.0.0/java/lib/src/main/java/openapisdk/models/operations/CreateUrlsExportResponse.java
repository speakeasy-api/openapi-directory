package openapisdk.models.operations;



public class CreateUrlsExportResponse {
    public String contentType;
    public CreateUrlsExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CsvExportStatus csvExportStatus;
    public CreateUrlsExportResponse withCsvExportStatus(openapisdk.models.shared.CsvExportStatus csvExportStatus) {
        this.csvExportStatus = csvExportStatus;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public CreateUrlsExportResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public CreateUrlsExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}