package openapisdk.models.shared;


public enum ChangeActionEnum {
    ADD("ADD"),
    MODIFY("MODIFY"),
    REMOVE("REMOVE");

    public final String value;

    private ChangeActionEnum(String value) {
        this.value = value;
    }
}
