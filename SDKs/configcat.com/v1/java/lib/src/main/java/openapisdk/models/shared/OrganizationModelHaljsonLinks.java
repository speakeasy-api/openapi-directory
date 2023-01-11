package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrganizationModelHaljsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String members;
    public OrganizationModelHaljsonLinks withMembers(String members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public String products;
    public OrganizationModelHaljsonLinks withProducts(String products) {
        this.products = products;
        return this;
    }
}