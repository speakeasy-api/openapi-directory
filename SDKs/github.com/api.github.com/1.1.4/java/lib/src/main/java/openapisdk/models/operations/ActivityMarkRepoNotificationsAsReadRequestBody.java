package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityMarkRepoNotificationsAsReadRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_read_at")
    public String lastReadAt;
    public ActivityMarkRepoNotificationsAsReadRequestBody withLastReadAt(String lastReadAt) {
        this.lastReadAt = lastReadAt;
        return this;
    }
}