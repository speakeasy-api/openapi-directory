package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSoftwareUpdateJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IotJobArn")
    public String iotJobArn;
    public CreateSoftwareUpdateJobResponse withIotJobArn(String iotJobArn) {
        this.iotJobArn = iotJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IotJobId")
    public String iotJobId;
    public CreateSoftwareUpdateJobResponse withIotJobId(String iotJobId) {
        this.iotJobId = iotJobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlatformSoftwareVersion")
    public String platformSoftwareVersion;
    public CreateSoftwareUpdateJobResponse withPlatformSoftwareVersion(String platformSoftwareVersion) {
        this.platformSoftwareVersion = platformSoftwareVersion;
        return this;
    }
}