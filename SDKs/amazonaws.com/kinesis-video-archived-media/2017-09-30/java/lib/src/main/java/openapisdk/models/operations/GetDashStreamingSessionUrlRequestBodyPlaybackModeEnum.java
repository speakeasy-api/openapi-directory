package openapisdk.models.operations;


public enum GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum {
    LIVE("LIVE"),
    LIVE_REPLAY("LIVE_REPLAY"),
    ON_DEMAND("ON_DEMAND");

    public final String value;

    private GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum(String value) {
        this.value = value;
    }
}
