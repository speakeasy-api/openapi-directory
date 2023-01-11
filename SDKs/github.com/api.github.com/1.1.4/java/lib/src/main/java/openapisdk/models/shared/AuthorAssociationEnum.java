package openapisdk.models.shared;


public enum AuthorAssociationEnum {
    COLLABORATOR("COLLABORATOR"),
    CONTRIBUTOR("CONTRIBUTOR"),
    FIRST_TIMER("FIRST_TIMER"),
    FIRST_TIME_CONTRIBUTOR("FIRST_TIME_CONTRIBUTOR"),
    MANNEQUIN("MANNEQUIN"),
    MEMBER("MEMBER"),
    NONE("NONE"),
    OWNER("OWNER");

    public final String value;

    private AuthorAssociationEnum(String value) {
        this.value = value;
    }
}
