package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LaunchedInstance
 * Configure launced instance.
**/
public class LaunchedInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceID")
    public String ec2InstanceID;
    public LaunchedInstance withEc2InstanceId(String ec2InstanceID) {
        this.ec2InstanceID = ec2InstanceID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstBoot")
    public FirstBootEnum firstBoot;
    public LaunchedInstance withFirstBoot(FirstBootEnum firstBoot) {
        this.firstBoot = firstBoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobID")
    public String jobID;
    public LaunchedInstance withJobId(String jobID) {
        this.jobID = jobID;
        return this;
    }
}