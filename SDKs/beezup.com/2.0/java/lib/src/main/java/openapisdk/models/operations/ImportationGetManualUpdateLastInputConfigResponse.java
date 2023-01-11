package openapisdk.models.operations;



public class ImportationGetManualUpdateLastInputConfigResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationGetManualUpdateLastInputConfigResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationGetManualUpdateLastInputConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationGetManualUpdateLastInputConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LastManualImportInputConfiguration lastManualImportInputConfiguration;
    public ImportationGetManualUpdateLastInputConfigResponse withLastManualImportInputConfiguration(openapisdk.models.shared.LastManualImportInputConfiguration lastManualImportInputConfiguration) {
        this.lastManualImportInputConfiguration = lastManualImportInputConfiguration;
        return this;
    }
}