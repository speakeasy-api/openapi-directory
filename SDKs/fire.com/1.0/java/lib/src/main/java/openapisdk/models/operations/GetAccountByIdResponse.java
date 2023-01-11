package openapisdk.models.operations;



public class GetAccountByIdResponse {
    public String contentType;
    public GetAccountByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
    public GetAccountByIdResponse withOneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems(openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems) {
        this.oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems = oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
        return this;
    }
}