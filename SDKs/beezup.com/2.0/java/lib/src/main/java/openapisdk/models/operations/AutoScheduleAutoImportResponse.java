package openapisdk.models.operations;



public class AutoScheduleAutoImportResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public AutoScheduleAutoImportResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public AutoScheduleAutoImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AutoScheduleAutoImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}