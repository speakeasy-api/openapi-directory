package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Product
 * The type that defines the fields for the aspects of a product.
**/
public class Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspects")
    public Aspect[] aspects;
    public Product withAspects(Aspect[] aspects) {
        this.aspects = aspects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public Product withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Product withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epid")
    public String epid;
    public Product withEpid(String epid) {
        this.epid = epid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrls")
    public String[] imageUrls;
    public Product withImageUrls(String[] imageUrls) {
        this.imageUrls = imageUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Product withTitle(String title) {
        this.title = title;
        return this;
    }
}