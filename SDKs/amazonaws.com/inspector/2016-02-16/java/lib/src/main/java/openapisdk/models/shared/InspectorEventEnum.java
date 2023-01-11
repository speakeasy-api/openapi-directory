package openapisdk.models.shared;


public enum InspectorEventEnum {
    ASSESSMENT_RUN_STARTED("ASSESSMENT_RUN_STARTED"),
    ASSESSMENT_RUN_COMPLETED("ASSESSMENT_RUN_COMPLETED"),
    ASSESSMENT_RUN_STATE_CHANGED("ASSESSMENT_RUN_STATE_CHANGED"),
    FINDING_REPORTED("FINDING_REPORTED"),
    OTHER("OTHER");

    public final String value;

    private InspectorEventEnum(String value) {
        this.value = value;
    }
}
