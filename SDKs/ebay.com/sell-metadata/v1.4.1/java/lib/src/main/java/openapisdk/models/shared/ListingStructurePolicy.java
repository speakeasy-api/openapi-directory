package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingStructurePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public ListingStructurePolicy withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTreeId")
    public String categoryTreeId;
    public ListingStructurePolicy withCategoryTreeId(String categoryTreeId) {
        this.categoryTreeId = categoryTreeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variationsSupported")
    public Boolean variationsSupported;
    public ListingStructurePolicy withVariationsSupported(Boolean variationsSupported) {
        this.variationsSupported = variationsSupported;
        return this;
    }
}