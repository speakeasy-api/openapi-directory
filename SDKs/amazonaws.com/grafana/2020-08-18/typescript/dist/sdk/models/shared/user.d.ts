import { SpeakeasyBase } from "../../../internal/utils";
import { UserTypeEnum } from "./usertypeenum";
/**
 * A structure that specifies one user or group in the workspace.
 */
export declare class User extends SpeakeasyBase {
    id: string;
    type: UserTypeEnum;
}
