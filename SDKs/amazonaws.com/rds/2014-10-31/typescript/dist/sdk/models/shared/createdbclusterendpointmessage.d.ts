import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateDBClusterEndpointMessage extends SpeakeasyBase {
    dbClusterEndpointIdentifier: string;
    dbClusterIdentifier: string;
    endpointType: string;
    excludedMembers?: string[];
    staticMembers?: string[];
    tags?: TagList[];
}
