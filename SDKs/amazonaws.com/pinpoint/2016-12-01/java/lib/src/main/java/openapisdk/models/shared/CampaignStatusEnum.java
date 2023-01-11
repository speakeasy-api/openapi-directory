package openapisdk.models.shared;


public enum CampaignStatusEnum {
    SCHEDULED("SCHEDULED"),
    EXECUTING("EXECUTING"),
    PENDING_NEXT_RUN("PENDING_NEXT_RUN"),
    COMPLETED("COMPLETED"),
    PAUSED("PAUSED"),
    DELETED("DELETED"),
    INVALID("INVALID");

    public final String value;

    private CampaignStatusEnum(String value) {
        this.value = value;
    }
}
