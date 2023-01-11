package openapisdk.models.shared;


public enum ViewpointsFilterTypeEnum {
    LOCKDOWN("lockdown"),
    PANNING("panning"),
    TRACKING_SHOT("tracking_shot"),
    AERIAL_VIEW("aerial_view"),
    HIGH_ANGLE_VIEW("high_angle_view"),
    LOW_ANGLE_VIEW("low_angle_view"),
    TILT("tilt"),
    POINT_OF_VIEW("point_of_view");

    public final String value;

    private ViewpointsFilterTypeEnum(String value) {
        this.value = value;
    }
}
