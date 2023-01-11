package openapisdk.models.shared;


public enum TaskStopCodeEnum {
    TASK_FAILED_TO_START("TaskFailedToStart"),
    ESSENTIAL_CONTAINER_EXITED("EssentialContainerExited"),
    USER_INITIATED("UserInitiated");

    public final String value;

    private TaskStopCodeEnum(String value) {
        this.value = value;
    }
}
