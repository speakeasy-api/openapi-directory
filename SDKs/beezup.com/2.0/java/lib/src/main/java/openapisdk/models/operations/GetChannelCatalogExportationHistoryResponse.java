package openapisdk.models.operations;



public class GetChannelCatalogExportationHistoryResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogExportationHistoryResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogExportationHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogExportationHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogExportationHistory channelCatalogExportationHistory;
    public GetChannelCatalogExportationHistoryResponse withChannelCatalogExportationHistory(openapisdk.models.shared.ChannelCatalogExportationHistory channelCatalogExportationHistory) {
        this.channelCatalogExportationHistory = channelCatalogExportationHistory;
        return this;
    }
}