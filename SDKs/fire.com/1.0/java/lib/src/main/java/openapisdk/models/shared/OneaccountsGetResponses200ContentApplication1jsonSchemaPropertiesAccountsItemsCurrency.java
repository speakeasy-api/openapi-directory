package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum code;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency withCode(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency withDescription(String description) {
        this.description = description;
        return this;
    }
}