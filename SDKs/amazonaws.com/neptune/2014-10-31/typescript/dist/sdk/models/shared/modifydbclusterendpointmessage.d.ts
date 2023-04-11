import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyDBClusterEndpointMessage extends SpeakeasyBase {
    dbClusterEndpointIdentifier: string;
    endpointType?: string;
    excludedMembers?: string[];
    staticMembers?: string[];
}
