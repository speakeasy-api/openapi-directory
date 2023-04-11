import { SpeakeasyBase } from "../../../internal/utils";
import { EgressConfiguration } from "./egressconfiguration";
import { IngressConfiguration } from "./ingressconfiguration";
/**
 * Describes configuration settings related to network traffic of an App Runner service. Consists of embedded objects for each configurable network feature.
 */
export declare class NetworkConfiguration extends SpeakeasyBase {
    egressConfiguration?: EgressConfiguration;
    ingressConfiguration?: IngressConfiguration;
}
