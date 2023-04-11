import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceProtocolEnum } from "./containerserviceprotocolenum";
/**
 * Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
 */
export declare class Container extends SpeakeasyBase {
    command?: string[];
    environment?: Record<string, string>;
    image?: string;
    ports?: Record<string, ContainerServiceProtocolEnum>;
}
