import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual cluster snapshot.</p>
 */
export declare class DBClusterSnapshotAttributeList extends SpeakeasyBase {
    attributeName?: string;
    attributeValues?: string[];
}
