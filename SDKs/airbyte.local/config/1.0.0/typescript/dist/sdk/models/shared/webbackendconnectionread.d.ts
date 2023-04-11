import { SpeakeasyBase } from "../../../internal/utils";
import { AirbyteCatalog } from "./airbytecatalog";
import { CatalogDiff } from "./catalogdiff";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionScheduleData } from "./connectionscheduledata";
import { ConnectionScheduleTypeEnum } from "./connectionscheduletypeenum";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { DestinationRead } from "./destinationread";
import { GeographyEnum } from "./geographyenum";
import { JobStatusEnum } from "./jobstatusenum";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { NonBreakingChangesPreferenceEnum } from "./nonbreakingchangespreferenceenum";
import { OperationRead } from "./operationread";
import { ResourceRequirements } from "./resourcerequirements";
import { SchemaChangeEnum } from "./schemachangeenum";
import { SourceRead } from "./sourceread";
/**
 * Successful operation
 */
export declare class WebBackendConnectionRead extends SpeakeasyBase {
    /**
     * Describes the difference between two Airbyte catalogs.
     */
    catalogDiff?: CatalogDiff;
    catalogId?: string;
    connectionId: string;
    destination: DestinationRead;
    destinationId: string;
    geography?: GeographyEnum;
    isSyncing: boolean;
    /**
     * epoch time of the latest sync job. null if no sync job has taken place.
     */
    latestSyncJobCreatedAt?: number;
    latestSyncJobStatus?: JobStatusEnum;
    name: string;
    /**
     * Method used for computing final namespace in destination
     */
    namespaceDefinition?: NamespaceDefinitionTypeEnum;
    /**
     * Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
     */
    namespaceFormat?: string;
    nonBreakingChangesPreference: NonBreakingChangesPreferenceEnum;
    notifySchemaChanges: boolean;
    operationIds?: string[];
    operations?: OperationRead[];
    /**
     * Prefix that will be prepended to the name of each stream when it is written to the destination.
     */
    prefix?: string;
    /**
     * optional resource requirements to run workers (blank for unbounded allocations)
     */
    resourceRequirements?: ResourceRequirements;
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
    schemaChange: SchemaChangeEnum;
    source: SourceRead;
    sourceId: string;
    /**
     * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
     */
    status: ConnectionStatusEnum;
    /**
     * describes the available schema (catalog).
     */
    syncCatalog: AirbyteCatalog;
}
