package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountPublicationsLinks {
    @JsonProperty("self")
    public LinksGetPublicationsLink self;
    public AccountPublicationsLinks withSelf(LinksGetPublicationsLink self) {
        this.self = self;
        return this;
    }
}