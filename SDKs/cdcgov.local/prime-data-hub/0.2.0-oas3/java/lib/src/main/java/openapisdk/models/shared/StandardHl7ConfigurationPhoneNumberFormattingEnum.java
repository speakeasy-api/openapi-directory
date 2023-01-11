package openapisdk.models.shared;


public enum StandardHl7ConfigurationPhoneNumberFormattingEnum {
    STANDARD("STANDARD"),
    ONLY_DIGITS_IN_COMPONENT_ONE("ONLY_DIGITS_IN_COMPONENT_ONE"),
    AREA_LOCAL_IN_COMPONENT_ONE("AREA_LOCAL_IN_COMPONENT_ONE");

    public final String value;

    private StandardHl7ConfigurationPhoneNumberFormattingEnum(String value) {
        this.value = value;
    }
}
