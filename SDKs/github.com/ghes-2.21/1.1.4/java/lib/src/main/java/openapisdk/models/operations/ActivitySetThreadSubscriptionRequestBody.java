package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivitySetThreadSubscriptionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignored")
    public Boolean ignored;
    public ActivitySetThreadSubscriptionRequestBody withIgnored(Boolean ignored) {
        this.ignored = ignored;
        return this;
    }
}