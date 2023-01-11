package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrdersOrderRequestV2ConsigneeNewV2 {
    @JsonProperty("address1")
    public String address1;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonProperty("addressLocality")
    public String addressLocality;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withAddressLocality(String addressLocality) {
        this.addressLocality = addressLocality;
        return this;
    }
    @JsonProperty("addressRegion")
    public String addressRegion;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withAddressRegion(String addressRegion) {
        this.addressRegion = addressRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("phone")
    public String phone;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public PostOrdersOrderRequestV2ConsigneeNewV2 withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
}