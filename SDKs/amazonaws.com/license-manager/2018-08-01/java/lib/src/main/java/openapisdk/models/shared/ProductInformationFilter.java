package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductInformationFilter
 * Describes product information filters.
**/
public class ProductInformationFilter {
    @JsonProperty("ProductInformationFilterComparator")
    public String productInformationFilterComparator;
    public ProductInformationFilter withProductInformationFilterComparator(String productInformationFilterComparator) {
        this.productInformationFilterComparator = productInformationFilterComparator;
        return this;
    }
    @JsonProperty("ProductInformationFilterName")
    public String productInformationFilterName;
    public ProductInformationFilter withProductInformationFilterName(String productInformationFilterName) {
        this.productInformationFilterName = productInformationFilterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductInformationFilterValue")
    public String[] productInformationFilterValue;
    public ProductInformationFilter withProductInformationFilterValue(String[] productInformationFilterValue) {
        this.productInformationFilterValue = productInformationFilterValue;
        return this;
    }
}