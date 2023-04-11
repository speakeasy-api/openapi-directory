import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A data structure with information about any primary and secondary clusters associated with an Neptune global database.
 */
export declare class GlobalClusterMemberList extends SpeakeasyBase {
    dbClusterArn?: string;
    isWriter?: boolean;
    readers?: string[];
}
