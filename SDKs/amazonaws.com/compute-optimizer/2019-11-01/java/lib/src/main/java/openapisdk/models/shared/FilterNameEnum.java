package openapisdk.models.shared;


public enum FilterNameEnum {
    FINDING("Finding"),
    FINDING_REASON_CODES("FindingReasonCodes"),
    RECOMMENDATION_SOURCE_TYPE("RecommendationSourceType");

    public final String value;

    private FilterNameEnum(String value) {
        this.value = value;
    }
}
