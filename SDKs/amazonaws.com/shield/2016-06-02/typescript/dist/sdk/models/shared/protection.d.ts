import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationLayerAutomaticResponseConfiguration } from "./applicationlayerautomaticresponseconfiguration";
/**
 * An object that represents a resource that is under DDoS protection.
 */
export declare class Protection extends SpeakeasyBase {
    applicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration;
    healthCheckIds?: string[];
    id?: string;
    name?: string;
    protectionArn?: string;
    resourceArn?: string;
}
