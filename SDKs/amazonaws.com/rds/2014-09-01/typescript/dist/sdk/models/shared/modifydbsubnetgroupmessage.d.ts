import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyDBSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
}
