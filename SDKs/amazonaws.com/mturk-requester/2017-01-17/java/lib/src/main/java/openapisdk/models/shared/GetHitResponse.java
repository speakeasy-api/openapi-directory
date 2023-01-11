package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetHitResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HIT")
    public Hit hit;
    public GetHitResponse withHit(Hit hit) {
        this.hit = hit;
        return this;
    }
}