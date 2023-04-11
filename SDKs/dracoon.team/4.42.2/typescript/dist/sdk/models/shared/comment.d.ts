import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Node comment information
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * User information
     */
    createdBy: UserInfo;
    /**
     * Comment ID
     */
    id: number;
    /**
     * Determines whether comment was edited or not
     */
    isChanged: boolean;
    /**
     * Determines whether comment was deleted or not
     */
    isDeleted: boolean;
    /**
     * Comment text
     */
    text: string;
    /**
     * Modification date
     */
    updatedAt: Date;
    /**
     * User information
     */
    updatedBy: UserInfo;
}
