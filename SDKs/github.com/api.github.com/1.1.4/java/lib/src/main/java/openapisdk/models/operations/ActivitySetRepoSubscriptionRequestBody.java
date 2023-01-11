package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivitySetRepoSubscriptionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignored")
    public Boolean ignored;
    public ActivitySetRepoSubscriptionRequestBody withIgnored(Boolean ignored) {
        this.ignored = ignored;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribed")
    public Boolean subscribed;
    public ActivitySetRepoSubscriptionRequestBody withSubscribed(Boolean subscribed) {
        this.subscribed = subscribed;
        return this;
    }
}