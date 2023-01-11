package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProductInformation
 * Describes product information for a license configuration.
**/
public class ProductInformation {
    @JsonProperty("ProductInformationFilterList")
    public ProductInformationFilter[] productInformationFilterList;
    public ProductInformation withProductInformationFilterList(ProductInformationFilter[] productInformationFilterList) {
        this.productInformationFilterList = productInformationFilterList;
        return this;
    }
    @JsonProperty("ResourceType")
    public String resourceType;
    public ProductInformation withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}