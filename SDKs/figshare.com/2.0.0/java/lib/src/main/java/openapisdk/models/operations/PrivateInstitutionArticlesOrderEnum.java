package openapisdk.models.operations;


public enum PrivateInstitutionArticlesOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views"),
    SHARES("shares"),
    DOWNLOADS("downloads"),
    CITES("cites");

    public final String value;

    private PrivateInstitutionArticlesOrderEnum(String value) {
        this.value = value;
    }
}
