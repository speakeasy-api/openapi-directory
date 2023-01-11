package openapisdk.models.shared;


public enum SubscriptionTypeEnum {
    SNS("SNS"),
    EMAIL("EMAIL");

    public final String value;

    private SubscriptionTypeEnum(String value) {
        this.value = value;
    }
}
