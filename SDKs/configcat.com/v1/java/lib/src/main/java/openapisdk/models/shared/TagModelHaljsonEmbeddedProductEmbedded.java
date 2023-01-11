package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagModelHaljsonEmbeddedProductEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public TagModelHaljsonEmbeddedProductEmbeddedOrganization organization;
    public TagModelHaljsonEmbeddedProductEmbedded withOrganization(TagModelHaljsonEmbeddedProductEmbeddedOrganization organization) {
        this.organization = organization;
        return this;
    }
}