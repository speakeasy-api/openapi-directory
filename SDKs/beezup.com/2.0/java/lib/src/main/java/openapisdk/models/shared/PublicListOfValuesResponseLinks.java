package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublicListOfValuesResponseLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetPublicListOfValuesLink self;
    public PublicListOfValuesResponseLinks withSelf(LinksGetPublicListOfValuesLink self) {
        this.self = self;
        return this;
    }
}