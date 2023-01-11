package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * UsageRecord
 * Provides quota and aggregated usage data for an Amazon Macie account.
**/
public class UsageRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public UsageRecord withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("freeTrialStartDate")
    public OffsetDateTime freeTrialStartDate;
    public UsageRecord withFreeTrialStartDate(OffsetDateTime freeTrialStartDate) {
        this.freeTrialStartDate = freeTrialStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public UsageByAccount[] usage;
    public UsageRecord withUsage(UsageByAccount[] usage) {
        this.usage = usage;
        return this;
    }
}