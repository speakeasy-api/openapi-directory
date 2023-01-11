package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ActivateSubscriptionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("recoverBeginPeriodOrderLastModificationUtcDate")
    public OffsetDateTime recoverBeginPeriodOrderLastModificationUtcDate;
    public ActivateSubscriptionRequest withRecoverBeginPeriodOrderLastModificationUtcDate(OffsetDateTime recoverBeginPeriodOrderLastModificationUtcDate) {
        this.recoverBeginPeriodOrderLastModificationUtcDate = recoverBeginPeriodOrderLastModificationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("recoverEndPeriodOrderLastModificationUtcDate")
    public OffsetDateTime recoverEndPeriodOrderLastModificationUtcDate;
    public ActivateSubscriptionRequest withRecoverEndPeriodOrderLastModificationUtcDate(OffsetDateTime recoverEndPeriodOrderLastModificationUtcDate) {
        this.recoverEndPeriodOrderLastModificationUtcDate = recoverEndPeriodOrderLastModificationUtcDate;
        return this;
    }
}