package openapisdk.models.shared;


public enum TechnicalCueTypeEnum {
    COLOR_BARS("ColorBars"),
    END_CREDITS("EndCredits"),
    BLACK_FRAMES("BlackFrames"),
    OPENING_CREDITS("OpeningCredits"),
    STUDIO_LOGO("StudioLogo"),
    SLATE("Slate"),
    CONTENT("Content");

    public final String value;

    private TechnicalCueTypeEnum(String value) {
        this.value = value;
    }
}
