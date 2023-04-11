import { SpeakeasyBase } from "../../../internal/utils";
import { LDAPSStatusEnum } from "./ldapsstatusenum";
/**
 * Contains general information about the LDAPS settings.
 */
export declare class LDAPSSettingInfo extends SpeakeasyBase {
    ldapsStatus?: LDAPSStatusEnum;
    ldapsStatusReason?: string;
    lastUpdatedDateTime?: Date;
}
