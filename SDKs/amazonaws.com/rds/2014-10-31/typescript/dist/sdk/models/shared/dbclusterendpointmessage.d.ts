import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterEndpointList } from "./dbclusterendpointlist";
/**
 * Success
 */
export declare class DBClusterEndpointMessage extends SpeakeasyBase {
    dbClusterEndpoints?: DBClusterEndpointList[];
    marker?: string;
}
