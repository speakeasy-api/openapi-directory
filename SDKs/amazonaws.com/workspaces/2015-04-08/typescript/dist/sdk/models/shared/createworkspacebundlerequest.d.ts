import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeType } from "./computetype";
import { RootStorage } from "./rootstorage";
import { Tag } from "./tag";
import { UserStorage } from "./userstorage";
export declare class CreateWorkspaceBundleRequest extends SpeakeasyBase {
    bundleDescription: string;
    bundleName: string;
    /**
     * Describes the compute type of the bundle.
     */
    computeType: ComputeType;
    imageId: string;
    /**
     * Describes the root volume for a WorkSpace bundle.
     */
    rootStorage?: RootStorage;
    tags?: Tag[];
    /**
     * Describes the user volume for a WorkSpace bundle.
     */
    userStorage: UserStorage;
}
