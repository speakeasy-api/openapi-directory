package openapisdk.models.shared;


public enum OperationEnum {
    REPLACE("replace"),
    REMOVE("remove");

    public final String value;

    private OperationEnum(String value) {
        this.value = value;
    }
}
