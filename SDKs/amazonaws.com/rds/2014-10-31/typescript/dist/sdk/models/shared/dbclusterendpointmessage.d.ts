import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterEndpointList } from "./dbclusterendpointlist";
export declare class DbClusterEndpointMessage extends SpeakeasyBase {
    dbClusterEndpoints?: DbClusterEndpointList[];
    marker?: string;
}
