package openapisdk.models.shared;



public class ApplicationResourceLifecycleDescriptionMessage {
    public String applicationName;
    public ApplicationResourceLifecycleDescriptionMessage withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    public ApplicationResourceLifecycleConfig resourceLifecycleConfig;
    public ApplicationResourceLifecycleDescriptionMessage withResourceLifecycleConfig(ApplicationResourceLifecycleConfig resourceLifecycleConfig) {
        this.resourceLifecycleConfig = resourceLifecycleConfig;
        return this;
    }
}