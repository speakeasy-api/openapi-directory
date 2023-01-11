package openapisdk.models.shared;


public enum ClusterFieldEnum {
    ATTACHMENTS("ATTACHMENTS"),
    CONFIGURATIONS("CONFIGURATIONS"),
    SETTINGS("SETTINGS"),
    STATISTICS("STATISTICS"),
    TAGS("TAGS");

    public final String value;

    private ClusterFieldEnum(String value) {
        this.value = value;
    }
}
