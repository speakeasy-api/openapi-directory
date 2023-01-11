package openapisdk.models.operations;


public enum ListSpeechSynthesisTasksStatusEnum {
    SCHEDULED("scheduled"),
    IN_PROGRESS("inProgress"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private ListSpeechSynthesisTasksStatusEnum(String value) {
        this.value = value;
    }
}
