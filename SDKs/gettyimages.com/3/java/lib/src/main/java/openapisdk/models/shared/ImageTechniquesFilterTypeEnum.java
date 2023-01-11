package openapisdk.models.shared;


public enum ImageTechniquesFilterTypeEnum {
    REALTIME("realtime"),
    TIME_LAPSE("time_lapse"),
    SLOW_MOTION("slow_motion"),
    COLOR("color"),
    BLACK_AND_WHITE("black_and_white"),
    ANIMATION("animation"),
    SELECTIVE_FOCUS("selective_focus");

    public final String value;

    private ImageTechniquesFilterTypeEnum(String value) {
        this.value = value;
    }
}
