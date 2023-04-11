import { SpeakeasyBase } from "../../../internal/utils";
import { AirbyteCatalog } from "./airbytecatalog";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionScheduleData } from "./connectionscheduledata";
import { ConnectionScheduleTypeEnum } from "./connectionscheduletypeenum";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { GeographyEnum } from "./geographyenum";
import { NamespaceDefinitionTypeEnum } from "./namespacedefinitiontypeenum";
import { NonBreakingChangesPreferenceEnum } from "./nonbreakingchangespreferenceenum";
import { ResourceRequirements } from "./resourcerequirements";
import { WebBackendOperationCreateOrUpdate } from "./webbackendoperationcreateorupdate";
/**
 * Used to apply a patch-style update to a connection, which means that null properties remain unchanged
 */
export declare class WebBackendConnectionUpdate extends SpeakeasyBase {
    connectionId: string;
    geography?: GeographyEnum;
    /**
     * Name that will be set to the connection
     */
    name?: string;
    /**
     * Method used for computing final namespace in destination
     */
    namespaceDefinition?: NamespaceDefinitionTypeEnum;
    /**
     * Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
     */
    namespaceFormat?: string;
    nonBreakingChangesPreference?: NonBreakingChangesPreferenceEnum;
    notifySchemaChanges?: boolean;
    operations?: WebBackendOperationCreateOrUpdate[];
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
    skipReset?: boolean;
    sourceCatalogId?: string;
    /**
     * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
     */
    status?: ConnectionStatusEnum;
    /**
     * describes the available schema (catalog).
     */
    syncCatalog?: AirbyteCatalog;
}
