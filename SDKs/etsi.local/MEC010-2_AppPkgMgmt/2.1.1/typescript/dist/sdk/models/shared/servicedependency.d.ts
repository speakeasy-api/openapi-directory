import { SpeakeasyBase } from "../../../internal/utils";
import { TransportDependency } from "./transportdependency";
export declare class ServiceDependency extends SpeakeasyBase {
    /**
     * Requested permissions regarding the access of the application to the service. See clause 8.2 of ETSI GS MEC 009 [4].
     *
     * @remarks
     * The format of this attribute is left for the data model design stage.
     */
    requestedPermissions?: string[];
    /**
     * See MEC011
     */
    serCategory?: any;
    /**
     * The name of the service, for example, RNIS, LocationService, etc.
     */
    serName: string;
    /**
     * Indicates transport and serialization format dependencies of consuming the service. Defaults to REST + JSON if absent. See note.
     */
    serTransportDependencies?: TransportDependency[];
    /**
     * The version of the service.
     */
    version: string;
}
