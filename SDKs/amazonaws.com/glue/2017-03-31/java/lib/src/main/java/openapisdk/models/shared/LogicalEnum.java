package openapisdk.models.shared;


public enum LogicalEnum {
    AND("AND"),
    ANY("ANY");

    public final String value;

    private LogicalEnum(String value) {
        this.value = value;
    }
}
