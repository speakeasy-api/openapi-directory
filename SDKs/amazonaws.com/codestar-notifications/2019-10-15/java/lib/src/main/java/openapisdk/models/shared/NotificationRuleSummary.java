package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationRuleSummary
 * Information about a specified notification rule.
**/
public class NotificationRuleSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public NotificationRuleSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public NotificationRuleSummary withId(String id) {
        this.id = id;
        return this;
    }
}