package openapisdk.models.shared;


public enum ResourceAttributeEnum {
    PROPERTIES("PROPERTIES"),
    METADATA("METADATA"),
    CREATIONPOLICY("CREATIONPOLICY"),
    UPDATEPOLICY("UPDATEPOLICY"),
    DELETIONPOLICY("DELETIONPOLICY"),
    TAGS("TAGS");

    public final String value;

    private ResourceAttributeEnum(String value) {
        this.value = value;
    }
}
