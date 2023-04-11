import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentStatusEnum } from "./componentstatusenum";
import { ComponentTypeEnum } from "./componenttypeenum";
import { Host } from "./host";
/**
 * The SAP component of your application.
 */
export declare class Component extends SpeakeasyBase {
    applicationId?: string;
    componentId?: string;
    componentType?: ComponentTypeEnum;
    databases?: string[];
    hosts?: Host[];
    lastUpdated?: Date;
    primaryHost?: string;
    status?: ComponentStatusEnum;
}
