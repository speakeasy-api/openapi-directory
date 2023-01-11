package openapisdk.models.shared;



/**
 * ApplicationResourceLifecycleConfig
 * The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
**/
public class ApplicationResourceLifecycleConfig {
    public String serviceRole;
    public ApplicationResourceLifecycleConfig withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    public ApplicationVersionLifecycleConfig versionLifecycleConfig;
    public ApplicationResourceLifecycleConfig withVersionLifecycleConfig(ApplicationVersionLifecycleConfig versionLifecycleConfig) {
        this.versionLifecycleConfig = versionLifecycleConfig;
        return this;
    }
}