import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { ParallelDataConfig } from "./paralleldataconfig";
import { Tag } from "./tag";
export declare class CreateParallelDataRequest extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    /**
     * The encryption key used to encrypt this object.
     */
    encryptionKey?: EncryptionKey;
    name: string;
    parallelDataConfig: ParallelDataConfig;
    tags?: Tag[];
}
