package openapisdk.models.shared;


public enum DataUploadFrequencyEnum {
    PT5_M("PT5M"),
    PT10_M("PT10M"),
    PT15_M("PT15M"),
    PT30_M("PT30M"),
    PT1_H("PT1H");

    public final String value;

    private DataUploadFrequencyEnum(String value) {
        this.value = value;
    }
}
