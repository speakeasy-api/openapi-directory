import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResourceLifecycleConfig } from "./applicationresourcelifecycleconfig";
import { Tag } from "./tag";
/**
 * Request to create an application.
 */
export declare class CreateApplicationMessage extends SpeakeasyBase {
    applicationName: string;
    description?: string;
    resourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
    tags?: Tag[];
}
