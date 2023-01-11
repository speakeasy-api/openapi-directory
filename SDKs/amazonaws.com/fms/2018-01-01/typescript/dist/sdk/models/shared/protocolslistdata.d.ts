import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Firewall Manager protocols list.
**/
export declare class ProtocolsListData extends SpeakeasyBase {
    createTime?: Date;
    lastUpdateTime?: Date;
    listId?: string;
    listName: string;
    listUpdateToken?: string;
    previousProtocolsList?: Record<string, string[]>;
    protocolsList: string[];
}
