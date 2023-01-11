package openapisdk.models.shared;


public enum PatchOpEnum {
    ADD("add"),
    REMOVE("remove"),
    REPLACE("replace");

    public final String value;

    private PatchOpEnum(String value) {
        this.value = value;
    }
}
