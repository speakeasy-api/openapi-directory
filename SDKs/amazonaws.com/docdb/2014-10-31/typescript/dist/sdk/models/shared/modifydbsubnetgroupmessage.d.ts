import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>ModifyDBSubnetGroup</a>.
 */
export declare class ModifyDBSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
}
