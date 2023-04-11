import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstanceList } from "./dbinstancelist";
/**
 * Success
 */
export declare class DBInstanceMessage extends SpeakeasyBase {
    dbInstances?: DBInstanceList[];
    marker?: string;
}
