package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DockerVolumeConfiguration
 * This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.
**/
public class DockerVolumeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoprovision")
    public Boolean autoprovision;
    public DockerVolumeConfiguration withAutoprovision(Boolean autoprovision) {
        this.autoprovision = autoprovision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driver")
    public String driver;
    public DockerVolumeConfiguration withDriver(String driver) {
        this.driver = driver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driverOpts")
    public java.util.Map<String, String> driverOpts;
    public DockerVolumeConfiguration withDriverOpts(java.util.Map<String, String> driverOpts) {
        this.driverOpts = driverOpts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public DockerVolumeConfiguration withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public ScopeEnum scope;
    public DockerVolumeConfiguration withScope(ScopeEnum scope) {
        this.scope = scope;
        return this;
    }
}