package openapisdk.models.shared;



/**
 * InstanceMonitoring
 * Describes whether detailed monitoring is enabled for the Auto Scaling instances.
**/
public class InstanceMonitoring {
    public Boolean enabled;
    public InstanceMonitoring withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}