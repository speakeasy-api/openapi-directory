import { SpeakeasyBase } from "../../../internal/utils";
import { SyncModeEnum } from "./syncmodeenum";
/**
 * the immutable schema defined by the source
 */
export declare class AirbyteStream extends SpeakeasyBase {
    /**
     * Path to the field that will be used to determine if a record is new or modified since the last sync. If not provided by the source, the end user will have to specify the comparable themselves.
     */
    defaultCursorField?: string[];
    /**
     * Stream schema using Json Schema specs.
     */
    jsonSchema?: Record<string, any>;
    /**
     * Stream's name.
     */
    name: string;
    /**
     * Optional Source-defined namespace. Airbyte streams from the same sources should have the same namespace. Currently only used by JDBC destinations to determine what schema to write to.
     */
    namespace?: string;
    /**
     * If the source defines the cursor field, then any other cursor field inputs will be ignored. If it does not, either the user_provided one is used, or the default one is used as a backup.
     */
    sourceDefinedCursor?: boolean;
    /**
     * If the source defines the primary key, paths to the fields that will be used as a primary key. If not provided by the source, the end user will have to specify the primary key themselves.
     */
    sourceDefinedPrimaryKey?: string[][];
    supportedSyncModes?: SyncModeEnum[];
}
