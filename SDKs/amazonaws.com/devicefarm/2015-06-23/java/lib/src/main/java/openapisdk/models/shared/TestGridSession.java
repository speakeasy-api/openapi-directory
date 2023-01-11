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
 * TestGridSession
 * A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.
**/
public class TestGridSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public TestGridSession withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingMinutes")
    public Double billingMinutes;
    public TestGridSession withBillingMinutes(Double billingMinutes) {
        this.billingMinutes = billingMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public TestGridSession withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ended")
    public OffsetDateTime ended;
    public TestGridSession withEnded(OffsetDateTime ended) {
        this.ended = ended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seleniumProperties")
    public String seleniumProperties;
    public TestGridSession withSeleniumProperties(String seleniumProperties) {
        this.seleniumProperties = seleniumProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TestGridSessionStatusEnum status;
    public TestGridSession withStatus(TestGridSessionStatusEnum status) {
        this.status = status;
        return this;
    }
}