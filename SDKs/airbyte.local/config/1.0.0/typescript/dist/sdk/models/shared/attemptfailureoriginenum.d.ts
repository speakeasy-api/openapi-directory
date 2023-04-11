/**
 * Indicates where the error originated. If not set, the origin of error is not well known.
 */
export declare enum AttemptFailureOriginEnum {
    Source = "source",
    Destination = "destination",
    Replication = "replication",
    Persistence = "persistence",
    Normalization = "normalization",
    Dbt = "dbt",
    AirbytePlatform = "airbyte_platform",
    Unknown = "unknown"
}
