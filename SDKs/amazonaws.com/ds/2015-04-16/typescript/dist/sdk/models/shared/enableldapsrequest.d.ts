import { SpeakeasyBase } from "../../../internal/utils";
import { LDAPSTypeEnum } from "./ldapstypeenum";
export declare class EnableLDAPSRequest extends SpeakeasyBase {
    directoryId: string;
    type: LDAPSTypeEnum;
}
