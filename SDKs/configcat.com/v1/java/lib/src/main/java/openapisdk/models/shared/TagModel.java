package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public TagModel withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public ProductModel product;
    public TagModel withProduct(ProductModel product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagId")
    public Long tagId;
    public TagModel withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}