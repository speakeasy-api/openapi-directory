package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StandardOffersLinks {
    @JsonProperty("self")
    public LinksGetStandardOffersLink self;
    public StandardOffersLinks withSelf(LinksGetStandardOffersLink self) {
        this.self = self;
        return this;
    }
}