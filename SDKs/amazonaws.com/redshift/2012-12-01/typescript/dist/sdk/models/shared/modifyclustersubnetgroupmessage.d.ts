import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class ModifyClusterSubnetGroupMessage extends SpeakeasyBase {
    clusterSubnetGroupName: string;
    description?: string;
    subnetIds: string[];
}
