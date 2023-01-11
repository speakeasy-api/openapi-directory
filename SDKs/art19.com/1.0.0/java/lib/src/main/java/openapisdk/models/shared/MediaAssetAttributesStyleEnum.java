package openapisdk.models.shared;


public enum MediaAssetAttributesStyleEnum {
    INFO("info"),
    ITUNES("itunes"),
    MEDIUM("medium"),
    ORIGINAL("original"),
    REGULAR("regular"),
    SQUARE400("square-400"),
    SQUARE640("square-640"),
    SQUARE888("square-888"),
    SQUARE3000("square-3000"),
    STRIPPED_ORIGINAL("stripped-original"),
    THUMB("thumb"),
    WAVEFORM_DATA("waveform_data");

    public final String value;

    private MediaAssetAttributesStyleEnum(String value) {
        this.value = value;
    }
}
