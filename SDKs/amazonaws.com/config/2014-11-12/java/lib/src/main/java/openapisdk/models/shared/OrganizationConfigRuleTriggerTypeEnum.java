package openapisdk.models.shared;


public enum OrganizationConfigRuleTriggerTypeEnum {
    CONFIGURATION_ITEM_CHANGE_NOTIFICATION("ConfigurationItemChangeNotification"),
    OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION("OversizedConfigurationItemChangeNotification"),
    SCHEDULED_NOTIFICATION("ScheduledNotification");

    public final String value;

    private OrganizationConfigRuleTriggerTypeEnum(String value) {
        this.value = value;
    }
}
