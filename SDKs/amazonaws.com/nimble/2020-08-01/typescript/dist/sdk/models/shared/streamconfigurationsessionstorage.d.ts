import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionStorageModeEnum } from "./streamingsessionstoragemodeenum";
import { StreamingSessionStorageRoot } from "./streamingsessionstorageroot";
/**
 * The configuration for a streaming session’s upload storage.
 */
export declare class StreamConfigurationSessionStorage extends SpeakeasyBase {
    mode: StreamingSessionStorageModeEnum[];
    root?: StreamingSessionStorageRoot;
}
