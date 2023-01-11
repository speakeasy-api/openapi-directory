import { SpeakeasyBase } from "../../../internal/utils";
import { GroupTypeEnum } from "./grouptypeenum";
/**
 * The details of a group
**/
export declare class GroupDetails extends SpeakeasyBase {
    creationDate?: Date;
    id?: string;
    name?: string;
    organization?: string;
    readOnly?: boolean;
    type?: GroupTypeEnum;
    usersCount?: number;
}
