package openapisdk.models.shared;


public enum ChoiceStatusEnum {
    SELECTED("SELECTED"),
    NOT_APPLICABLE("NOT_APPLICABLE"),
    UNSELECTED("UNSELECTED");

    public final String value;

    private ChoiceStatusEnum(String value) {
        this.value = value;
    }
}
