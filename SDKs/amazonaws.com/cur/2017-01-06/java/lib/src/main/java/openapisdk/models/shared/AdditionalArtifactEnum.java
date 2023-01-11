package openapisdk.models.shared;


public enum AdditionalArtifactEnum {
    REDSHIFT("REDSHIFT"),
    QUICKSIGHT("QUICKSIGHT"),
    ATHENA("ATHENA");

    public final String value;

    private AdditionalArtifactEnum(String value) {
        this.value = value;
    }
}
