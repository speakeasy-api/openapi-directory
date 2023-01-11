package openapisdk.models.shared;


public enum StatefulActionEnum {
    PASS("PASS"),
    DROP("DROP"),
    ALERT("ALERT");

    public final String value;

    private StatefulActionEnum(String value) {
        this.value = value;
    }
}
