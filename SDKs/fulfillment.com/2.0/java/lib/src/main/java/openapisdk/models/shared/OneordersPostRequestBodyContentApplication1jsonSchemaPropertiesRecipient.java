package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient {
    @JsonProperty("address1")
    public String address1;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonProperty("addressLocality")
    public String addressLocality;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withAddressLocality(String addressLocality) {
        this.addressLocality = addressLocality;
        return this;
    }
    @JsonProperty("addressRegion")
    public String addressRegion;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withAddressRegion(String addressRegion) {
        this.addressRegion = addressRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("phone")
    public String phone;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
}