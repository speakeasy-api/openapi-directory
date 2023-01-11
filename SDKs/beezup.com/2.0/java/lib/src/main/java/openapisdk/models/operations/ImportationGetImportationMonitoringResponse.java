package openapisdk.models.operations;



public class ImportationGetImportationMonitoringResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationGetImportationMonitoringResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationGetImportationMonitoringResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationGetImportationMonitoringResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportationMonitoring importationMonitoring;
    public ImportationGetImportationMonitoringResponse withImportationMonitoring(openapisdk.models.shared.ImportationMonitoring importationMonitoring) {
        this.importationMonitoring = importationMonitoring;
        return this;
    }
}