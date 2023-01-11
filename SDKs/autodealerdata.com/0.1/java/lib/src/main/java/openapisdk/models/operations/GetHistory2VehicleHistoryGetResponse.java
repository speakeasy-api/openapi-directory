package openapisdk.models.operations;



public class GetHistory2VehicleHistoryGetResponse {
    public String contentType;
    public GetHistory2VehicleHistoryGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetHistory2VehicleHistoryGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.HistoryResp historyResp;
    public GetHistory2VehicleHistoryGetResponse withHistoryResp(openapisdk.models.shared.HistoryResp historyResp) {
        this.historyResp = historyResp;
        return this;
    }
    public Long statusCode;
    public GetHistory2VehicleHistoryGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}