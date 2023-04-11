import { SpeakeasyBase } from "../../../internal/utils";
import { EgressFilter } from "./egressfilter";
import { MeshServiceDiscovery } from "./meshservicediscovery";
/**
 * An object that represents the specification of a service mesh.
 */
export declare class MeshSpec extends SpeakeasyBase {
    egressFilter?: EgressFilter;
    /**
     * An object that represents the service discovery information for a service mesh.
     */
    serviceDiscovery?: MeshServiceDiscovery;
}
