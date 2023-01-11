package openapisdk.models.shared;


public enum UpdateBehaviorEnum {
    LOG("LOG"),
    UPDATE_IN_DATABASE("UPDATE_IN_DATABASE");

    public final String value;

    private UpdateBehaviorEnum(String value) {
        this.value = value;
    }
}
