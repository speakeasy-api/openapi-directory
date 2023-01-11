package openapisdk.models.shared;



/**
 * ConfigurationSettingsDescriptions
 * The results from a request to change the configuration settings of an environment.
**/
public class ConfigurationSettingsDescriptions {
    public ConfigurationSettingsDescription[] configurationSettings;
    public ConfigurationSettingsDescriptions withConfigurationSettings(ConfigurationSettingsDescription[] configurationSettings) {
        this.configurationSettings = configurationSettings;
        return this;
    }
}