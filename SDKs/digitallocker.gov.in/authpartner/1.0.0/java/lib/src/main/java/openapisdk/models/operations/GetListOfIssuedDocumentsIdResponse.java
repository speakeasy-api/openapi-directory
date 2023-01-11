package openapisdk.models.operations;



public class GetListOfIssuedDocumentsIdResponse {
    public String contentType;
    public GetListOfIssuedDocumentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetListOfIssuedDocumentsId200ApplicationJson getListOfIssuedDocumentsId200ApplicationJSONObject;
    public GetListOfIssuedDocumentsIdResponse withGetListOfIssuedDocumentsId200ApplicationJsonObject(GetListOfIssuedDocumentsId200ApplicationJson getListOfIssuedDocumentsId200ApplicationJSONObject) {
        this.getListOfIssuedDocumentsId200ApplicationJSONObject = getListOfIssuedDocumentsId200ApplicationJSONObject;
        return this;
    }
    public GetListOfIssuedDocumentsId401ApplicationJson getListOfIssuedDocumentsId401ApplicationJSONObject;
    public GetListOfIssuedDocumentsIdResponse withGetListOfIssuedDocumentsId401ApplicationJsonObject(GetListOfIssuedDocumentsId401ApplicationJson getListOfIssuedDocumentsId401ApplicationJSONObject) {
        this.getListOfIssuedDocumentsId401ApplicationJSONObject = getListOfIssuedDocumentsId401ApplicationJSONObject;
        return this;
    }
    public Object getListOfIssuedDocumentsId500ApplicationJSONOneOf;
    public GetListOfIssuedDocumentsIdResponse withGetListOfIssuedDocumentsId500ApplicationJsonOneOf(Object getListOfIssuedDocumentsId500ApplicationJSONOneOf) {
        this.getListOfIssuedDocumentsId500ApplicationJSONOneOf = getListOfIssuedDocumentsId500ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public GetListOfIssuedDocumentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}