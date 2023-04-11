import { SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationInitiationStepNameEnum } from "./datareplicationinitiationstepnameenum";
import { DataReplicationInitiationStepStatusEnum } from "./datareplicationinitiationstepstatusenum";
/**
 * Data replication initiation step.
 */
export declare class DataReplicationInitiationStep extends SpeakeasyBase {
    name?: DataReplicationInitiationStepNameEnum;
    status?: DataReplicationInitiationStepStatusEnum;
}
