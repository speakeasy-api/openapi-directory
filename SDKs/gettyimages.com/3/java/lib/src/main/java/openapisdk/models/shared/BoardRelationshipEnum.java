package openapisdk.models.shared;


public enum BoardRelationshipEnum {
    OWNED("owned"),
    INVITED("invited");

    public final String value;

    private BoardRelationshipEnum(String value) {
        this.value = value;
    }
}
