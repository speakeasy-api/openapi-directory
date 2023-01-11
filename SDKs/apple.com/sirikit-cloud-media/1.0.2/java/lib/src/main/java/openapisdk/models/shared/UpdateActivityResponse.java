package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateActivityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queue")
    public Queue queue;
    public UpdateActivityResponse withQueue(Queue queue) {
        this.queue = queue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userActivity")
    public UserActivity userActivity;
    public UpdateActivityResponse withUserActivity(UserActivity userActivity) {
        this.userActivity = userActivity;
        return this;
    }
}