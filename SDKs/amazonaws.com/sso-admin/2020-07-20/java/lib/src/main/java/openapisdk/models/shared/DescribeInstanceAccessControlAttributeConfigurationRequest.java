package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeInstanceAccessControlAttributeConfigurationRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public DescribeInstanceAccessControlAttributeConfigurationRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
}