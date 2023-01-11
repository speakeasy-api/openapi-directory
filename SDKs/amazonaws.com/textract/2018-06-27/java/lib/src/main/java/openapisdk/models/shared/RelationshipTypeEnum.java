package openapisdk.models.shared;


public enum RelationshipTypeEnum {
    VALUE("VALUE"),
    CHILD("CHILD"),
    COMPLEX_FEATURES("COMPLEX_FEATURES");

    public final String value;

    private RelationshipTypeEnum(String value) {
        this.value = value;
    }
}
