package openapisdk.models.shared;



/**
 * DesiredConfiguration
 * <p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p>
**/
public class DesiredConfiguration {
    public LaunchTemplateSpecification launchTemplate;
    public DesiredConfiguration withLaunchTemplate(LaunchTemplateSpecification launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    public MixedInstancesPolicy mixedInstancesPolicy;
    public DesiredConfiguration withMixedInstancesPolicy(MixedInstancesPolicy mixedInstancesPolicy) {
        this.mixedInstancesPolicy = mixedInstancesPolicy;
        return this;
    }
}