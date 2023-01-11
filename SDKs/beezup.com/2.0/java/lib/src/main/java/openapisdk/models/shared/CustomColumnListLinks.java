package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomColumnListLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public LinksCatalogSaveCustomColumnLink add;
    public CustomColumnListLinks withAdd(LinksCatalogSaveCustomColumnLink add) {
        this.add = add;
        return this;
    }
    @JsonProperty("self")
    public LinksCatalogGetCustomColumnsLink self;
    public CustomColumnListLinks withSelf(LinksCatalogGetCustomColumnsLink self) {
        this.self = self;
        return this;
    }
}