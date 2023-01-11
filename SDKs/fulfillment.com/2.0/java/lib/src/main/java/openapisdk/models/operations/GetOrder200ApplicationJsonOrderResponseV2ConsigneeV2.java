package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 {
    @JsonProperty("address1")
    public String address1;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonProperty("addressLocality")
    public String addressLocality;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withAddressLocality(String addressLocality) {
        this.addressLocality = addressLocality;
        return this;
    }
    @JsonProperty("addressRegion")
    public String addressRegion;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withAddressRegion(String addressRegion) {
        this.addressRegion = addressRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso")
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 iso;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withIso(GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 iso) {
        this.iso = iso;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonProperty("postalCode")
    public String postalCode;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public openapisdk.models.shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy updatedBy;
    public GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 withUpdatedBy(openapisdk.models.shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}