import { SpeakeasyBase } from "../../../internal/utils";
import { LDAPSTypeEnum } from "./ldapstypeenum";
export declare class DescribeLDAPSSettingsRequest extends SpeakeasyBase {
    directoryId: string;
    limit?: number;
    nextToken?: string;
    type?: LDAPSTypeEnum;
}
