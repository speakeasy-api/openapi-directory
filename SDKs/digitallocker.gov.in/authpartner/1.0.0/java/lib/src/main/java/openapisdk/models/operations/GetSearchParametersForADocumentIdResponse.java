package openapisdk.models.operations;



public class GetSearchParametersForADocumentIdResponse {
    public String contentType;
    public GetSearchParametersForADocumentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetSearchParametersForADocumentId400ApplicationJson getSearchParametersForADocumentId400ApplicationJSONObject;
    public GetSearchParametersForADocumentIdResponse withGetSearchParametersForADocumentId400ApplicationJsonObject(GetSearchParametersForADocumentId400ApplicationJson getSearchParametersForADocumentId400ApplicationJSONObject) {
        this.getSearchParametersForADocumentId400ApplicationJSONObject = getSearchParametersForADocumentId400ApplicationJSONObject;
        return this;
    }
    public GetSearchParametersForADocumentId401ApplicationJson getSearchParametersForADocumentId401ApplicationJSONObject;
    public GetSearchParametersForADocumentIdResponse withGetSearchParametersForADocumentId401ApplicationJsonObject(GetSearchParametersForADocumentId401ApplicationJson getSearchParametersForADocumentId401ApplicationJSONObject) {
        this.getSearchParametersForADocumentId401ApplicationJSONObject = getSearchParametersForADocumentId401ApplicationJSONObject;
        return this;
    }
    public GetSearchParametersForADocumentId500ApplicationJson getSearchParametersForADocumentId500ApplicationJSONObject;
    public GetSearchParametersForADocumentIdResponse withGetSearchParametersForADocumentId500ApplicationJsonObject(GetSearchParametersForADocumentId500ApplicationJson getSearchParametersForADocumentId500ApplicationJSONObject) {
        this.getSearchParametersForADocumentId500ApplicationJSONObject = getSearchParametersForADocumentId500ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.SearchParametersResponse[] searchParametersResponse;
    public GetSearchParametersForADocumentIdResponse withSearchParametersResponse(openapisdk.models.shared.SearchParametersResponse[] searchParametersResponse) {
        this.searchParametersResponse = searchParametersResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchParametersForADocumentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}