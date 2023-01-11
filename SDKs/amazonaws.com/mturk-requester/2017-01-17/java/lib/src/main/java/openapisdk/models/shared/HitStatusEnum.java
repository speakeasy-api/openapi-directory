package openapisdk.models.shared;


public enum HitStatusEnum {
    ASSIGNABLE("Assignable"),
    UNASSIGNABLE("Unassignable"),
    REVIEWABLE("Reviewable"),
    REVIEWING("Reviewing"),
    DISPOSED("Disposed");

    public final String value;

    private HitStatusEnum(String value) {
        this.value = value;
    }
}
