package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOutpostOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Outpost")
    public Outpost outpost;
    public GetOutpostOutput withOutpost(Outpost outpost) {
        this.outpost = outpost;
        return this;
    }
}