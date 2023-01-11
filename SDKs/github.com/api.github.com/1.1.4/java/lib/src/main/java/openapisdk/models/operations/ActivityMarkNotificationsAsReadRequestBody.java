package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ActivityMarkNotificationsAsReadRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_read_at")
    public OffsetDateTime lastReadAt;
    public ActivityMarkNotificationsAsReadRequestBody withLastReadAt(OffsetDateTime lastReadAt) {
        this.lastReadAt = lastReadAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public ActivityMarkNotificationsAsReadRequestBody withRead(Boolean read) {
        this.read = read;
        return this;
    }
}