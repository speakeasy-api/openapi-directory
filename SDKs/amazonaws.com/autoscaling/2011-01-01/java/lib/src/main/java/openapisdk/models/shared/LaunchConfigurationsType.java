package openapisdk.models.shared;



public class LaunchConfigurationsType {
    public LaunchConfiguration[] launchConfigurations;
    public LaunchConfigurationsType withLaunchConfigurations(LaunchConfiguration[] launchConfigurations) {
        this.launchConfigurations = launchConfigurations;
        return this;
    }
    public String nextToken;
    public LaunchConfigurationsType withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}