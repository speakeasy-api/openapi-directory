package openapisdk.models.shared;


public enum ImageStateChangeReasonCodeEnum {
    INTERNAL_ERROR("INTERNAL_ERROR"),
    IMAGE_BUILDER_NOT_AVAILABLE("IMAGE_BUILDER_NOT_AVAILABLE"),
    IMAGE_COPY_FAILURE("IMAGE_COPY_FAILURE");

    public final String value;

    private ImageStateChangeReasonCodeEnum(String value) {
        this.value = value;
    }
}
