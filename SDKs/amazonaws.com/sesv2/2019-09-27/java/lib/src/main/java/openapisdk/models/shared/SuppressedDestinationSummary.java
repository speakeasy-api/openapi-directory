package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SuppressedDestinationSummary
 * A summary that describes the suppressed email address.
**/
public class SuppressedDestinationSummary {
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public SuppressedDestinationSummary withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public SuppressedDestinationSummary withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonProperty("Reason")
    public SuppressionListReasonEnum reason;
    public SuppressedDestinationSummary withReason(SuppressionListReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}