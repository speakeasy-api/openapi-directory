package openapisdk.models.shared;


public enum ElasticsearchIndexRotationPeriodEnum {
    NO_ROTATION("NoRotation"),
    ONE_HOUR("OneHour"),
    ONE_DAY("OneDay"),
    ONE_WEEK("OneWeek"),
    ONE_MONTH("OneMonth");

    public final String value;

    private ElasticsearchIndexRotationPeriodEnum(String value) {
        this.value = value;
    }
}
