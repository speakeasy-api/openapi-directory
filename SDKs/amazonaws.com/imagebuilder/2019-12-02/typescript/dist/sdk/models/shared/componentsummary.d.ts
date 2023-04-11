import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentState } from "./componentstate";
import { ComponentTypeEnum } from "./componenttypeenum";
import { PlatformEnum } from "./platformenum";
/**
 * A high-level summary of a component.
 */
export declare class ComponentSummary extends SpeakeasyBase {
    arn?: string;
    changeDescription?: string;
    dateCreated?: string;
    description?: string;
    name?: string;
    obfuscate?: boolean;
    owner?: string;
    platform?: PlatformEnum;
    publisher?: string;
    state?: ComponentState;
    supportedOsVersions?: string[];
    tags?: Record<string, string>;
    type?: ComponentTypeEnum;
    version?: string;
}
