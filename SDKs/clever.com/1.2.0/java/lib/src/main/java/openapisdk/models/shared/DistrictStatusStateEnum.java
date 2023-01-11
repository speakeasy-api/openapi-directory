package openapisdk.models.shared;


public enum DistrictStatusStateEnum {
    RUNNING("running"),
    PENDING("pending"),
    ERROR("error"),
    PAUSED("paused");

    public final String value;

    private DistrictStatusStateEnum(String value) {
        this.value = value;
    }
}
