package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterVolumeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ec2VolumeId")
    public String ec2VolumeId;
    public RegisterVolumeRequest withEc2VolumeId(String ec2VolumeId) {
        this.ec2VolumeId = ec2VolumeId;
        return this;
    }
    @JsonProperty("StackId")
    public String stackId;
    public RegisterVolumeRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}