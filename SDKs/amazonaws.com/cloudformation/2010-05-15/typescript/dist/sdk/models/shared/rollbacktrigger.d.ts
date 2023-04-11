import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A rollback trigger CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation.
 */
export declare class RollbackTrigger extends SpeakeasyBase {
    arn: string;
    type: string;
}
