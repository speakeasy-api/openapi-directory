package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInstanceAccessControlAttributeConfigurationRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public DeleteInstanceAccessControlAttributeConfigurationRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
}