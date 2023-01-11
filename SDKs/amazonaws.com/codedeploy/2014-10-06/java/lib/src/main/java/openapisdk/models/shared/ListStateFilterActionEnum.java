package openapisdk.models.shared;


public enum ListStateFilterActionEnum {
    INCLUDE("include"),
    EXCLUDE("exclude"),
    IGNORE("ignore");

    public final String value;

    private ListStateFilterActionEnum(String value) {
        this.value = value;
    }
}
