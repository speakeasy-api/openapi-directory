package openapisdk.models.shared;



/**
 * ConfigurationOptionsDescription
 * Describes the settings for a specified configuration set.
**/
public class ConfigurationOptionsDescription {
    public ConfigurationOptionDescription[] options;
    public ConfigurationOptionsDescription withOptions(ConfigurationOptionDescription[] options) {
        this.options = options;
        return this;
    }
    public String platformArn;
    public ConfigurationOptionsDescription withPlatformArn(String platformArn) {
        this.platformArn = platformArn;
        return this;
    }
    public String solutionStackName;
    public ConfigurationOptionsDescription withSolutionStackName(String solutionStackName) {
        this.solutionStackName = solutionStackName;
        return this;
    }
}