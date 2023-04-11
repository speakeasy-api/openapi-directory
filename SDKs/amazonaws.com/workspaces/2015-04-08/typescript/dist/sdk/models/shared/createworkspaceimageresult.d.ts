import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";
import { WorkspaceImageRequiredTenancyEnum } from "./workspaceimagerequiredtenancyenum";
import { WorkspaceImageStateEnum } from "./workspaceimagestateenum";
/**
 * Success
 */
export declare class CreateWorkspaceImageResult extends SpeakeasyBase {
    created?: Date;
    description?: string;
    imageId?: string;
    name?: string;
    operatingSystem?: OperatingSystem;
    ownerAccountId?: string;
    requiredTenancy?: WorkspaceImageRequiredTenancyEnum;
    state?: WorkspaceImageStateEnum;
}
