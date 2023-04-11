import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityConfigTypeEnum } from "./securityconfigtypeenum";
export declare class ListSecurityConfigsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    type: SecurityConfigTypeEnum;
}
