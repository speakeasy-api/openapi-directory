package openapisdk.models.shared;


public enum IntendedUseEnum {
    SINGLE_USE("SingleUse"),
    STORAGE("Storage");

    public final String value;

    private IntendedUseEnum(String value) {
        this.value = value;
    }
}
