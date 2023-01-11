package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceEntry
 * Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.
**/
public class InstanceEntry {
    @JsonProperty("availabilityZone")
    public String availabilityZone;
    public InstanceEntry withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonProperty("instanceType")
    public String instanceType;
    public InstanceEntry withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonProperty("portInfoSource")
    public PortInfoSourceTypeEnum portInfoSource;
    public InstanceEntry withPortInfoSource(PortInfoSourceTypeEnum portInfoSource) {
        this.portInfoSource = portInfoSource;
        return this;
    }
    @JsonProperty("sourceName")
    public String sourceName;
    public InstanceEntry withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userData")
    public String userData;
    public InstanceEntry withUserData(String userData) {
        this.userData = userData;
        return this;
    }
}