package openapisdk.models.shared;



/**
 * EnvironmentResourceDescriptionsMessage
 * Result message containing a list of environment resource descriptions.
**/
public class EnvironmentResourceDescriptionsMessage {
    public EnvironmentResourceDescription environmentResources;
    public EnvironmentResourceDescriptionsMessage withEnvironmentResources(EnvironmentResourceDescription environmentResources) {
        this.environmentResources = environmentResources;
        return this;
    }
}