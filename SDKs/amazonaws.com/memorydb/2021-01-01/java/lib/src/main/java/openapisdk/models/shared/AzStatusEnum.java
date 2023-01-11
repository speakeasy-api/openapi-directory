package openapisdk.models.shared;


public enum AzStatusEnum {
    SINGLEAZ("singleaz"),
    MULTIAZ("multiaz");

    public final String value;

    private AzStatusEnum(String value) {
        this.value = value;
    }
}
