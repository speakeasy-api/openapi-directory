package openapisdk.models.shared;


public enum PartitionInstanceTypeEnum {
    SEARCH_M1_SMALL("search.m1.small"),
    SEARCH_M1_LARGE("search.m1.large"),
    SEARCH_M2_XLARGE("search.m2.xlarge"),
    SEARCH_M22XLARGE("search.m2.2xlarge"),
    SEARCH_M3_MEDIUM("search.m3.medium"),
    SEARCH_M3_LARGE("search.m3.large"),
    SEARCH_M3_XLARGE("search.m3.xlarge"),
    SEARCH_M32XLARGE("search.m3.2xlarge"),
    SEARCH_SMALL("search.small"),
    SEARCH_MEDIUM("search.medium"),
    SEARCH_LARGE("search.large"),
    SEARCH_XLARGE("search.xlarge"),
    SEARCH2XLARGE("search.2xlarge"),
    SEARCH_PREVIOUSGENERATION_SMALL("search.previousgeneration.small"),
    SEARCH_PREVIOUSGENERATION_LARGE("search.previousgeneration.large"),
    SEARCH_PREVIOUSGENERATION_XLARGE("search.previousgeneration.xlarge"),
    SEARCH_PREVIOUSGENERATION2XLARGE("search.previousgeneration.2xlarge");

    public final String value;

    private PartitionInstanceTypeEnum(String value) {
        this.value = value;
    }
}
