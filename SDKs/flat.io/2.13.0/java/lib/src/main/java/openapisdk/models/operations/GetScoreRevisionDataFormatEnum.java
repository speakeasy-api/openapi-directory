package openapisdk.models.operations;


public enum GetScoreRevisionDataFormatEnum {
    JSON("json"),
    MXL("mxl"),
    XML("xml"),
    MP3("mp3"),
    WAV("wav"),
    MIDI("midi"),
    THUMBNAIL_PNG("thumbnail.png"),
    SYNCHRONIZATION_POINTS("synchronizationPoints");

    public final String value;

    private GetScoreRevisionDataFormatEnum(String value) {
        this.value = value;
    }
}
