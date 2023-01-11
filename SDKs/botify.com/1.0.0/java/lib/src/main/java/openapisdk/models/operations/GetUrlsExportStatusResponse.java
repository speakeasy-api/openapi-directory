package openapisdk.models.operations;



public class GetUrlsExportStatusResponse {
    public String contentType;
    public GetUrlsExportStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CsvExportStatus csvExportStatus;
    public GetUrlsExportStatusResponse withCsvExportStatus(openapisdk.models.shared.CsvExportStatus csvExportStatus) {
        this.csvExportStatus = csvExportStatus;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetUrlsExportStatusResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetUrlsExportStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}