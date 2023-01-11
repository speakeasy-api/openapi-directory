package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CatalogColumnLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rename")
    public LinksCatalogChangeCatalogColumnUserNameLink rename;
    public CatalogColumnLinks withRename(LinksCatalogChangeCatalogColumnUserNameLink rename) {
        this.rename = rename;
        return this;
    }
}