import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnumEnum } from "./actionenumenum";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";
/**
 *  The record of a change within Audit Manager. For example, this could be the status change of an assessment or the delegation of a control set.
 */
export declare class ChangeLog extends SpeakeasyBase {
    action?: ActionEnumEnum;
    createdAt?: Date;
    createdBy?: string;
    objectName?: string;
    objectType?: ObjectTypeEnumEnum;
}
