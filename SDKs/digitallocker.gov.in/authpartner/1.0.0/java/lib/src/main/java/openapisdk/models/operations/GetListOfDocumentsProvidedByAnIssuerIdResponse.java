package openapisdk.models.operations;



public class GetListOfDocumentsProvidedByAnIssuerIdResponse {
    public String contentType;
    public GetListOfDocumentsProvidedByAnIssuerIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocTypeResponse docTypeResponse;
    public GetListOfDocumentsProvidedByAnIssuerIdResponse withDocTypeResponse(openapisdk.models.shared.DocTypeResponse docTypeResponse) {
        this.docTypeResponse = docTypeResponse;
        return this;
    }
    public GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson getListOfDocumentsProvidedByAnIssuerId400ApplicationJSONObject;
    public GetListOfDocumentsProvidedByAnIssuerIdResponse withGetListOfDocumentsProvidedByAnIssuerId400ApplicationJsonObject(GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson getListOfDocumentsProvidedByAnIssuerId400ApplicationJSONObject) {
        this.getListOfDocumentsProvidedByAnIssuerId400ApplicationJSONObject = getListOfDocumentsProvidedByAnIssuerId400ApplicationJSONObject;
        return this;
    }
    public GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson getListOfDocumentsProvidedByAnIssuerId401ApplicationJSONObject;
    public GetListOfDocumentsProvidedByAnIssuerIdResponse withGetListOfDocumentsProvidedByAnIssuerId401ApplicationJsonObject(GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson getListOfDocumentsProvidedByAnIssuerId401ApplicationJSONObject) {
        this.getListOfDocumentsProvidedByAnIssuerId401ApplicationJSONObject = getListOfDocumentsProvidedByAnIssuerId401ApplicationJSONObject;
        return this;
    }
    public GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson getListOfDocumentsProvidedByAnIssuerId500ApplicationJSONObject;
    public GetListOfDocumentsProvidedByAnIssuerIdResponse withGetListOfDocumentsProvidedByAnIssuerId500ApplicationJsonObject(GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson getListOfDocumentsProvidedByAnIssuerId500ApplicationJSONObject) {
        this.getListOfDocumentsProvidedByAnIssuerId500ApplicationJSONObject = getListOfDocumentsProvidedByAnIssuerId500ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetListOfDocumentsProvidedByAnIssuerIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}