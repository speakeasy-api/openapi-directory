package openapisdk.models.shared;


public enum TrustTypeEnum {
    FOREST("Forest"),
    EXTERNAL("External");

    public final String value;

    private TrustTypeEnum(String value) {
        this.value = value;
    }
}
