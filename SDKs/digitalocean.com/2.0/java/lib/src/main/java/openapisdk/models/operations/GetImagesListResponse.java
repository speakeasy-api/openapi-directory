package openapisdk.models.operations;



public class GetImagesListResponse {
    public String contentType;
    public GetImagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetImagesListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetImagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetImagesList200ApplicationJson getImagesList200ApplicationJSONObject;
    public GetImagesListResponse withGetImagesList200ApplicationJsonObject(GetImagesList200ApplicationJson getImagesList200ApplicationJSONObject) {
        this.getImagesList200ApplicationJSONObject = getImagesList200ApplicationJSONObject;
        return this;
    }
    public GetImagesList401ApplicationJson getImagesList401ApplicationJSONObject;
    public GetImagesListResponse withGetImagesList401ApplicationJsonObject(GetImagesList401ApplicationJson getImagesList401ApplicationJSONObject) {
        this.getImagesList401ApplicationJSONObject = getImagesList401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetImagesListResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}