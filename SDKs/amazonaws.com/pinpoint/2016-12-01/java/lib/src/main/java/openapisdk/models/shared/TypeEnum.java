package openapisdk.models.shared;


public enum TypeEnum {
    ALL("ALL"),
    ANY("ANY"),
    NONE("NONE");

    public final String value;

    private TypeEnum(String value) {
        this.value = value;
    }
}
