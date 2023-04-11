import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentParameterDetail } from "./componentparameterdetail";
import { ComponentState } from "./componentstate";
import { ComponentTypeEnum } from "./componenttypeenum";
import { PlatformEnum } from "./platformenum";
/**
 * A detailed view of a component.
 */
export declare class Component extends SpeakeasyBase {
    arn?: string;
    changeDescription?: string;
    data?: string;
    dateCreated?: string;
    description?: string;
    encrypted?: boolean;
    kmsKeyId?: string;
    name?: string;
    obfuscate?: boolean;
    owner?: string;
    parameters?: ComponentParameterDetail[];
    platform?: PlatformEnum;
    publisher?: string;
    state?: ComponentState;
    supportedOsVersions?: string[];
    tags?: Record<string, string>;
    type?: ComponentTypeEnum;
    version?: string;
}
