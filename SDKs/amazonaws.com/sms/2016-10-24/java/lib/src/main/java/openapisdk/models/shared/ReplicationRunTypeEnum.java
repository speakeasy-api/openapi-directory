package openapisdk.models.shared;


public enum ReplicationRunTypeEnum {
    ON_DEMAND("ON_DEMAND"),
    AUTOMATIC("AUTOMATIC");

    public final String value;

    private ReplicationRunTypeEnum(String value) {
        this.value = value;
    }
}
