package openapisdk.models.operations;



public class AddAccountResponse {
    public String contentType;
    public AddAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
    public AddAccountResponse withOneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems(openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems) {
        this.oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems = oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
        return this;
    }
}