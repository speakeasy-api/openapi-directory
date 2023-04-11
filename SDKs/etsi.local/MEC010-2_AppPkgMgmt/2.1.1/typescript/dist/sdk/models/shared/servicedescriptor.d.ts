import { SpeakeasyBase } from "../../../internal/utils";
import { TransportsSupported } from "./transportssupported";
/**
 * 'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'
 */
export declare class ServiceDescriptor extends SpeakeasyBase {
    /**
     * See MEC011
     */
    serCategory?: any;
    /**
     * The name of the service, for example, RNIS, LocationService, etc.
     */
    serName: string;
    /**
     * 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'
     */
    transportsSupported?: TransportsSupported;
    /**
     * The version of the service.
     */
    version: string;
}
