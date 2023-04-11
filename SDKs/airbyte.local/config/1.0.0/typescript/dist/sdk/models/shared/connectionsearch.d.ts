import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionScheduleData } from "./connectionscheduledata";
import { ConnectionScheduleTypeEnum } from "./connectionscheduletypeenum";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { DestinationSearch } from "./destinationsearch";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { SourceSearch } from "./sourcesearch";
export declare class ConnectionSearch extends SpeakeasyBase {
    connectionId?: string;
    destination?: DestinationSearch;
    destinationId?: string;
    name?: string;
    /**
     * Method used for computing final namespace in destination
     */
    namespaceDefinition?: NamespaceDefinitionTypeEnum;
    /**
     * Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
     */
    namespaceFormat?: string;
    /**
     * Prefix that will be prepended to the name of each stream when it is written to the destination.
     */
    prefix?: string;
    /**
     * if null, then no schedule is set.
     */
    schedule?: ConnectionSchedule;
    /**
     * schedule for when the the connection should run, per the schedule type
     */
    scheduleData?: ConnectionScheduleData;
    /**
     * determine how the schedule data should be interpreted
     */
    scheduleType?: ConnectionScheduleTypeEnum;
    source?: SourceSearch;
    sourceId?: string;
    /**
     * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
     */
    status?: ConnectionStatusEnum;
}
