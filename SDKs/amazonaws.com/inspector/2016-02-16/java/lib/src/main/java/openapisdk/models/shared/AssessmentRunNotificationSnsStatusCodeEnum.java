package openapisdk.models.shared;


public enum AssessmentRunNotificationSnsStatusCodeEnum {
    SUCCESS("SUCCESS"),
    TOPIC_DOES_NOT_EXIST("TOPIC_DOES_NOT_EXIST"),
    ACCESS_DENIED("ACCESS_DENIED"),
    INTERNAL_ERROR("INTERNAL_ERROR");

    public final String value;

    private AssessmentRunNotificationSnsStatusCodeEnum(String value) {
        this.value = value;
    }
}
