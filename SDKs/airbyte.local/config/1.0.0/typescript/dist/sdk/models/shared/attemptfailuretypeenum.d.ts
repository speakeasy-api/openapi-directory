/**
 * Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known.
 */
export declare enum AttemptFailureTypeEnum {
    ConfigError = "config_error",
    SystemError = "system_error",
    ManualCancellation = "manual_cancellation",
    RefreshSchema = "refresh_schema"
}
