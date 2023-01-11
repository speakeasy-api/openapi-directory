package openapisdk.models.shared;


public enum OperatorEnum {
    ALL("ALL"),
    ANY("ANY");

    public final String value;

    private OperatorEnum(String value) {
        this.value = value;
    }
}
