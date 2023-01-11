package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDeviceResponseDeviceDescription
 * Device details.
**/
public class DescribeDeviceResponseDeviceDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public java.util.Map<String, Object> arn;
    public DescribeDeviceResponseDeviceDescription withArn(java.util.Map<String, Object> arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public DescribeDeviceResponseDeviceDescription withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceId")
    public java.util.Map<String, Object> deviceId;
    public DescribeDeviceResponseDeviceDescription withDeviceId(java.util.Map<String, Object> deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public java.util.Map<String, Object> enabled;
    public DescribeDeviceResponseDeviceDescription withEnabled(java.util.Map<String, Object> enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemainingLife")
    public java.util.Map<String, Object> remainingLife;
    public DescribeDeviceResponseDeviceDescription withRemainingLife(java.util.Map<String, Object> remainingLife) {
        this.remainingLife = remainingLife;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public DescribeDeviceResponseDeviceDescription withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public java.util.Map<String, Object> type;
    public DescribeDeviceResponseDeviceDescription withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}