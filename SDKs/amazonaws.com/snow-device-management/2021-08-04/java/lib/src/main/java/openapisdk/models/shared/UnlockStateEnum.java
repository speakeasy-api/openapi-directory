package openapisdk.models.shared;


public enum UnlockStateEnum {
    UNLOCKED("UNLOCKED"),
    LOCKED("LOCKED"),
    UNLOCKING("UNLOCKING");

    public final String value;

    private UnlockStateEnum(String value) {
        this.value = value;
    }
}
