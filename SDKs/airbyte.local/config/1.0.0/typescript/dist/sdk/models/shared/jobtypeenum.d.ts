/**
 * enum that describes the different types of jobs that the platform runs.
 */
export declare enum JobTypeEnum {
    GetSpec = "get_spec",
    CheckConnection = "check_connection",
    DiscoverSchema = "discover_schema",
    Sync = "sync",
    ResetConnection = "reset_connection",
    ConnectionUpdater = "connection_updater",
    Replicate = "replicate"
}
