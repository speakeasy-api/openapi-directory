/**
 * Specifies why occurrences of sensitive data can't be retrieved for a finding. Possible values are:
 */
export declare enum UnavailabilityReasonCodeEnum {
    ObjectExceedsSizeQuota = "OBJECT_EXCEEDS_SIZE_QUOTA",
    UnsupportedObjectType = "UNSUPPORTED_OBJECT_TYPE",
    UnsupportedFindingType = "UNSUPPORTED_FINDING_TYPE",
    InvalidClassificationResult = "INVALID_CLASSIFICATION_RESULT",
    ObjectUnavailable = "OBJECT_UNAVAILABLE"
}
