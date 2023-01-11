package openapisdk.models.operations;



public class GetMandateResponse {
    public String contentType;
    public GetMandateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMandateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems;
    public GetMandateResponse withOnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems(openapisdk.models.shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems) {
        this.onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems = onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems;
        return this;
    }
}