package openapisdk.models.shared;


public enum TagStatusEnum {
    TAGGED("TAGGED"),
    UNTAGGED("UNTAGGED"),
    ANY("ANY");

    public final String value;

    private TagStatusEnum(String value) {
        this.value = value;
    }
}
