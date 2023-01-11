package openapisdk.models.shared;


public enum PlacementConstraintTypeEnum {
    DISTINCT_INSTANCE("distinctInstance"),
    MEMBER_OF("memberOf");

    public final String value;

    private PlacementConstraintTypeEnum(String value) {
        this.value = value;
    }
}
