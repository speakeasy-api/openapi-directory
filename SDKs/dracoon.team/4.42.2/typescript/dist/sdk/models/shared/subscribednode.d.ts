import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Node type
 */
export declare enum SubscribedNodeTypeEnum {
    Room = "room",
    Folder = "folder",
    File = "file"
}
/**
 * Subscribed node information
 */
export declare class SubscribedNode extends SpeakeasyBase {
    /**
     * Auth parent room ID
     */
    authParentId?: number;
    /**
     * Node ID
     */
    id: number;
    /**
     * Node type
     */
    type?: SubscribedNodeTypeEnum;
}
