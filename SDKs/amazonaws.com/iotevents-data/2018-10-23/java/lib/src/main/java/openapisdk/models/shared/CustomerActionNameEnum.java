package openapisdk.models.shared;


public enum CustomerActionNameEnum {
    SNOOZE("SNOOZE"),
    ENABLE("ENABLE"),
    DISABLE("DISABLE"),
    ACKNOWLEDGE("ACKNOWLEDGE"),
    RESET("RESET");

    public final String value;

    private CustomerActionNameEnum(String value) {
        this.value = value;
    }
}
