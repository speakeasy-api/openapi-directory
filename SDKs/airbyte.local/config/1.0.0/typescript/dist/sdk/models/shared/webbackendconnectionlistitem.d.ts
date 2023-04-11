import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionScheduleData } from "./connectionscheduledata";
import { ConnectionScheduleTypeEnum } from "./connectionscheduletypeenum";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { DestinationSnippetRead } from "./destinationsnippetread";
import { JobStatusEnum } from "./jobstatusenum";
import { SchemaChangeEnum } from "./schemachangeenum";
import { SourceSnippetRead } from "./sourcesnippetread";
/**
 * Information about a connection that shows up in the connection list view.
 */
export declare class WebBackendConnectionListItem extends SpeakeasyBase {
    connectionId: string;
    destination: DestinationSnippetRead;
    isSyncing: boolean;
    /**
     * epoch time of the latest sync job. null if no sync job has taken place.
     */
    latestSyncJobCreatedAt?: number;
    latestSyncJobStatus?: JobStatusEnum;
    name: string;
    /**
     * schedule for when the the connection should run, per the schedule type
     */
    scheduleData?: ConnectionScheduleData;
    /**
     * determine how the schedule data should be interpreted
     */
    scheduleType?: ConnectionScheduleTypeEnum;
    schemaChange: SchemaChangeEnum;
    source: SourceSnippetRead;
    /**
     * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
     */
    status: ConnectionStatusEnum;
}
