package openapisdk.models.operations;


public enum GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum {
    LIVE("LIVE"),
    LIVE_REPLAY("LIVE_REPLAY"),
    ON_DEMAND("ON_DEMAND");

    public final String value;

    private GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum(String value) {
        this.value = value;
    }
}
