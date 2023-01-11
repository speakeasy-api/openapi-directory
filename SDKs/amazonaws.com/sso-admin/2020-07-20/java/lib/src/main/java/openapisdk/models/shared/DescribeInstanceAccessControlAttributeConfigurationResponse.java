package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeInstanceAccessControlAttributeConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceAccessControlAttributeConfiguration")
    public InstanceAccessControlAttributeConfiguration instanceAccessControlAttributeConfiguration;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withInstanceAccessControlAttributeConfiguration(InstanceAccessControlAttributeConfiguration instanceAccessControlAttributeConfiguration) {
        this.instanceAccessControlAttributeConfiguration = instanceAccessControlAttributeConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InstanceAccessControlAttributeConfigurationStatusEnum status;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withStatus(InstanceAccessControlAttributeConfigurationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
}