package openapisdk.models.shared;


public enum ClosestEnum {
    EITHER("either"),
    BEFORE("before"),
    AFTER("after");

    public final String value;

    private ClosestEnum(String value) {
        this.value = value;
    }
}
