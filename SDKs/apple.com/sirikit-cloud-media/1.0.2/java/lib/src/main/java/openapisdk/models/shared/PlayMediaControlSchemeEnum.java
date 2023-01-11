package openapisdk.models.shared;


public enum PlayMediaControlSchemeEnum {
    CUSTOM("custom"),
    ON_DEMAND("onDemand"),
    INTERNET_RADIO("internetRadio"),
    LIVE_STREAMING("liveStreaming"),
    AUDIO_BOOK("audioBook"),
    PODCAST("podcast"),
    ADVERTISEMENT("advertisement");

    public final String value;

    private PlayMediaControlSchemeEnum(String value) {
        this.value = value;
    }
}
