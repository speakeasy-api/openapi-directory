package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketNotificationConfigurationS3KeyFilterRule
 * Details for a filter rule.
**/
public class AwsS3BucketNotificationConfigurationS3KeyFilterRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum name;
    public AwsS3BucketNotificationConfigurationS3KeyFilterRule withName(AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsS3BucketNotificationConfigurationS3KeyFilterRule withValue(String value) {
        this.value = value;
        return this;
    }
}