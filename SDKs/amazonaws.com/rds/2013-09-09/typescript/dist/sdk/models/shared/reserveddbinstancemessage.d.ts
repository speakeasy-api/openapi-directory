import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstanceList } from "./reserveddbinstancelist";
export declare class ReservedDbInstanceMessage extends SpeakeasyBase {
    marker?: string;
    reservedDBInstances?: ReservedDbInstanceList[];
}
