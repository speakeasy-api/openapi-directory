/**
 * Enumeration of the possible failure codes for instance onboarding job
 */
export declare enum InstanceOnboardingJobFailureCodeEnum {
    EventBridgeAccessDenied = "EVENT_BRIDGE_ACCESS_DENIED",
    EventBridgeManagedRuleLimitExceeded = "EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED",
    IamAccessDenied = "IAM_ACCESS_DENIED",
    KmsAccessDenied = "KMS_ACCESS_DENIED",
    KmsKeyNotFound = "KMS_KEY_NOT_FOUND",
    InternalFailure = "INTERNAL_FAILURE"
}
