package openapisdk.models.operations;



public class ExportSubmissionsReviewsAsCsvResponse {
    public byte[] body;
    public ExportSubmissionsReviewsAsCsvResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportSubmissionsReviewsAsCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportSubmissionsReviewsAsCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] exportSubmissionsReviewsAsCsv200TextCsvBinaryString;
    public ExportSubmissionsReviewsAsCsvResponse withExportSubmissionsReviewsAsCsv200TextCsvBinaryString(byte[] exportSubmissionsReviewsAsCsv200TextCsvBinaryString) {
        this.exportSubmissionsReviewsAsCsv200TextCsvBinaryString = exportSubmissionsReviewsAsCsv200TextCsvBinaryString;
        return this;
    }
}