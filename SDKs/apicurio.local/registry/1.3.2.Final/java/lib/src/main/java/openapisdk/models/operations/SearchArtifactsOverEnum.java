package openapisdk.models.operations;


public enum SearchArtifactsOverEnum {
    EVERYTHING("everything"),
    NAME("name"),
    DESCRIPTION("description"),
    LABELS("labels");

    public final String value;

    private SearchArtifactsOverEnum(String value) {
        this.value = value;
    }
}
