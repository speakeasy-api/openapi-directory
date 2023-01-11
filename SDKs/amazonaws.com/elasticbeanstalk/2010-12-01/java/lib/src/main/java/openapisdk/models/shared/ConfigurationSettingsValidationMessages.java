package openapisdk.models.shared;



/**
 * ConfigurationSettingsValidationMessages
 * Provides a list of validation messages.
**/
public class ConfigurationSettingsValidationMessages {
    public ValidationMessage[] messages;
    public ConfigurationSettingsValidationMessages withMessages(ValidationMessage[] messages) {
        this.messages = messages;
        return this;
    }
}