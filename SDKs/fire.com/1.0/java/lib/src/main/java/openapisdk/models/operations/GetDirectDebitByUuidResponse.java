package openapisdk.models.operations;



public class GetDirectDebitByUuidResponse {
    public String contentType;
    public GetDirectDebitByUuidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDirectDebitByUuidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems;
    public GetDirectDebitByUuidResponse withOnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems(openapisdk.models.shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems) {
        this.onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems = onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems;
        return this;
    }
}