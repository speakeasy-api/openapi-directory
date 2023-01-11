import { SpeakeasyBase } from "../../../internal/utils";
import { GroupTypeEnum } from "./grouptypeenum";
/**
 * A group of users
**/
export declare class Group extends SpeakeasyBase {
    creationDate?: Date;
    id?: string;
    name?: string;
    organization?: string;
    readOnly?: boolean;
    type?: GroupTypeEnum;
    usersCount?: number;
}
