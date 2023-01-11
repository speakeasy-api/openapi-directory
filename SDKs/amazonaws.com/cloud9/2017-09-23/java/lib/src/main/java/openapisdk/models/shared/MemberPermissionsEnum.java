package openapisdk.models.shared;


public enum MemberPermissionsEnum {
    READ_WRITE("read-write"),
    READ_ONLY("read-only");

    public final String value;

    private MemberPermissionsEnum(String value) {
        this.value = value;
    }
}
