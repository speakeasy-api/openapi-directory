/**
 * Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. It's only used if there is no state persisted for that log stream.
 */
export declare enum CloudWatchLogsInitialPositionEnum {
    StartOfFile = "start_of_file",
    EndOfFile = "end_of_file"
}
