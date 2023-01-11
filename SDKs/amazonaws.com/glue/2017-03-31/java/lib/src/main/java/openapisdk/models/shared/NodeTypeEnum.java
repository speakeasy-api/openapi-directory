package openapisdk.models.shared;


public enum NodeTypeEnum {
    CRAWLER("CRAWLER"),
    JOB("JOB"),
    TRIGGER("TRIGGER");

    public final String value;

    private NodeTypeEnum(String value) {
        this.value = value;
    }
}
