import { SpeakeasyBase } from "../../../internal/utils";
import { RoleEnum } from "./roleenum";
import { UpdateActionEnum } from "./updateactionenum";
import { User } from "./user";
/**
 * Contains the instructions for one Grafana role permission update in a <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation.
 */
export declare class UpdateInstruction extends SpeakeasyBase {
    action: UpdateActionEnum;
    role: RoleEnum;
    users: User[];
}
