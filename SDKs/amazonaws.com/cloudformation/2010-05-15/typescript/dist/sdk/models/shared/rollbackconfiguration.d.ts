import { SpeakeasyBase } from "../../../internal/utils";
import { RollbackTrigger } from "./rollbacktrigger";
/**
 * <p>Structure containing the rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p>
 */
export declare class RollbackConfiguration extends SpeakeasyBase {
    monitoringTimeInMinutes?: number;
    rollbackTriggers?: RollbackTrigger[];
}
