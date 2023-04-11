import { SpeakeasyBase } from "../../../internal/utils";
import { BundleTypeEnum } from "./bundletypeenum";
import { ComputeType } from "./computetype";
import { RootStorage } from "./rootstorage";
import { UserStorage } from "./userstorage";
import { WorkspaceBundleStateEnum } from "./workspacebundlestateenum";
/**
 * Describes a WorkSpace bundle.
 */
export declare class WorkspaceBundle extends SpeakeasyBase {
    bundleId?: string;
    bundleType?: BundleTypeEnum;
    computeType?: ComputeType;
    creationTime?: Date;
    description?: string;
    imageId?: string;
    lastUpdatedTime?: Date;
    name?: string;
    owner?: string;
    rootStorage?: RootStorage;
    state?: WorkspaceBundleStateEnum;
    userStorage?: UserStorage;
}
