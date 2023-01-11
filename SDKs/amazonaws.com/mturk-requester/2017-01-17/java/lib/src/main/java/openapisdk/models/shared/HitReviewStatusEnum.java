package openapisdk.models.shared;


public enum HitReviewStatusEnum {
    NOT_REVIEWED("NotReviewed"),
    MARKED_FOR_REVIEW("MarkedForReview"),
    REVIEWED_APPROPRIATE("ReviewedAppropriate"),
    REVIEWED_INAPPROPRIATE("ReviewedInappropriate");

    public final String value;

    private HitReviewStatusEnum(String value) {
        this.value = value;
    }
}
