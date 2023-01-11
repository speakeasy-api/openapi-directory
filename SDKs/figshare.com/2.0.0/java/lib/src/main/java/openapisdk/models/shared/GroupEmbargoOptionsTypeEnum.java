package openapisdk.models.shared;


public enum GroupEmbargoOptionsTypeEnum {
    LOGGED_IN("logged_in"),
    IP_RANGE("ip_range"),
    ADMINISTRATOR("administrator");

    public final String value;

    private GroupEmbargoOptionsTypeEnum(String value) {
        this.value = value;
    }
}
