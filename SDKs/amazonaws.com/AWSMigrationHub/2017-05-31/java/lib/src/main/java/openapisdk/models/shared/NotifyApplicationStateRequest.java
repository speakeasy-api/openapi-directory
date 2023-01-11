package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class NotifyApplicationStateRequest {
    @JsonProperty("ApplicationId")
    public String applicationId;
    public NotifyApplicationStateRequest withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public NotifyApplicationStateRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("Status")
    public ApplicationStatusEnum status;
    public NotifyApplicationStateRequest withStatus(ApplicationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdateDateTime")
    public OffsetDateTime updateDateTime;
    public NotifyApplicationStateRequest withUpdateDateTime(OffsetDateTime updateDateTime) {
        this.updateDateTime = updateDateTime;
        return this;
    }
}