package openapisdk.models.shared;



/**
 * InstanceState
 * Information about the state of an EC2 instance.
**/
public class InstanceState {
    public String description;
    public InstanceState withDescription(String description) {
        this.description = description;
        return this;
    }
    public String instanceId;
    public InstanceState withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public String reasonCode;
    public InstanceState withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    public String state;
    public InstanceState withState(String state) {
        this.state = state;
        return this;
    }
}