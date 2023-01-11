package openapisdk.models.shared;


public enum ReceiverTimingFrequencyEnum {
    REAL_TIME("REAL_TIME"),
    HOURLY("HOURLY"),
    DAILY("DAILY");

    public final String value;

    private ReceiverTimingFrequencyEnum(String value) {
        this.value = value;
    }
}
