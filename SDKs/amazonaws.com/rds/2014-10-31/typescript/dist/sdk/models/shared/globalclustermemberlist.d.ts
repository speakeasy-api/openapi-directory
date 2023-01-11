import { SpeakeasyBase } from "../../../internal/utils";
import { WriteForwardingStatusEnum } from "./writeforwardingstatusenum";
/**
 *  A data structure with information about any primary and secondary clusters associated with an Aurora global database.
**/
export declare class GlobalClusterMemberList extends SpeakeasyBase {
    dbClusterArn?: string;
    globalWriteForwardingStatus?: WriteForwardingStatusEnum;
    isWriter?: boolean;
    readers?: string[];
}
