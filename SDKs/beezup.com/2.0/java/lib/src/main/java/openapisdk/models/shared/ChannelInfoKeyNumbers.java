package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelInfoKeyNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String categories;
    public ChannelInfoKeyNumbers withCategories(String categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public String products;
    public ChannelInfoKeyNumbers withProducts(String products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stores")
    public String stores;
    public ChannelInfoKeyNumbers withStores(String stores) {
        this.stores = stores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewsPerMonth")
    public String viewsPerMonth;
    public ChannelInfoKeyNumbers withViewsPerMonth(String viewsPerMonth) {
        this.viewsPerMonth = viewsPerMonth;
        return this;
    }
}