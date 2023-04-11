import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class ModifyDBSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
}
