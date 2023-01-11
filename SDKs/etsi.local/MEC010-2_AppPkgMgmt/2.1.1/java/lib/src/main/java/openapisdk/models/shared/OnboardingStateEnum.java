package openapisdk.models.shared;


public enum OnboardingStateEnum {
    CREATED("CREATED"),
    UPLOADING("UPLOADING"),
    PROCESSING("PROCESSING"),
    ONBOARDED("ONBOARDED");

    public final String value;

    private OnboardingStateEnum(String value) {
        this.value = value;
    }
}
