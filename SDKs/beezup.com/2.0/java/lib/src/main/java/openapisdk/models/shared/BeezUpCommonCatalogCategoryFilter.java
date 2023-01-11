package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BeezUpCommonCatalogCategoryFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryPath")
    public String[] categoryPath;
    public BeezUpCommonCatalogCategoryFilter withCategoryPath(String[] categoryPath) {
        this.categoryPath = categoryPath;
        return this;
    }
}