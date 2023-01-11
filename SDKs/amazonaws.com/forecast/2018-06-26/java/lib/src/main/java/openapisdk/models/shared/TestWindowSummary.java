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
 * TestWindowSummary
 * The status, start time, and end time of a backtest, as well as a failure reason if applicable.
**/
public class TestWindowSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public TestWindowSummary withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public TestWindowSummary withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TestWindowEnd")
    public OffsetDateTime testWindowEnd;
    public TestWindowSummary withTestWindowEnd(OffsetDateTime testWindowEnd) {
        this.testWindowEnd = testWindowEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TestWindowStart")
    public OffsetDateTime testWindowStart;
    public TestWindowSummary withTestWindowStart(OffsetDateTime testWindowStart) {
        this.testWindowStart = testWindowStart;
        return this;
    }
}