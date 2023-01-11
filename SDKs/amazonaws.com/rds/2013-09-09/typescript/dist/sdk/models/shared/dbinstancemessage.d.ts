import { SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceList } from "./dbinstancelist";
export declare class DbInstanceMessage extends SpeakeasyBase {
    dbInstances?: DbInstanceList[];
    marker?: string;
}
