package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateInstanceAccessControlAttributeConfigurationRequest {
    @JsonProperty("InstanceAccessControlAttributeConfiguration")
    public InstanceAccessControlAttributeConfiguration instanceAccessControlAttributeConfiguration;
    public CreateInstanceAccessControlAttributeConfigurationRequest withInstanceAccessControlAttributeConfiguration(InstanceAccessControlAttributeConfiguration instanceAccessControlAttributeConfiguration) {
        this.instanceAccessControlAttributeConfiguration = instanceAccessControlAttributeConfiguration;
        return this;
    }
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public CreateInstanceAccessControlAttributeConfigurationRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
}