import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentTypeEnum } from "./componenttypeenum";
import { PlatformEnum } from "./platformenum";
/**
 * The defining characteristics of a specific version of an Amazon Web Services TOE component.
 */
export declare class ComponentVersion extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    description?: string;
    name?: string;
    owner?: string;
    platform?: PlatformEnum;
    supportedOsVersions?: string[];
    type?: ComponentTypeEnum;
    version?: string;
}
