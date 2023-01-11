package openapisdk.models.shared;


public enum DynamoKeyTypeEnum {
    STRING("STRING"),
    NUMBER("NUMBER");

    public final String value;

    private DynamoKeyTypeEnum(String value) {
        this.value = value;
    }
}
