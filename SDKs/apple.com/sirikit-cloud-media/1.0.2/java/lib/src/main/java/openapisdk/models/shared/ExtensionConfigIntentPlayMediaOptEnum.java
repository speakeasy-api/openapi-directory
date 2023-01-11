package openapisdk.models.shared;


public enum ExtensionConfigIntentPlayMediaOptEnum {
    RESOLVE_PLAY_SHUFFLED("resolvePlayShuffled"),
    RESOLVE_PLAYBACK_REPEAT_MODE("resolvePlaybackRepeatMode"),
    RESOLVE_PLAYBACK_QUEUE_LOCATION("resolvePlaybackQueueLocation"),
    RESOLVE_RESUME_PLAYBACK("resolveResumePlayback");

    public final String value;

    private ExtensionConfigIntentPlayMediaOptEnum(String value) {
        this.value = value;
    }
}
