package openapisdk.models.shared;


public enum RuleExecutionReportingErrorTypeEnum {
    CHANNEL_NOT_PRESENT("ChannelNotPresent"),
    STORE_IS_IN_SYSTEM_BLOCK_STATE("StoreIsInSystemBlockState");

    public final String value;

    private RuleExecutionReportingErrorTypeEnum(String value) {
        this.value = value;
    }
}
