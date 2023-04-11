import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateSnapshotRequest extends SpeakeasyBase {
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    name: string;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
    volumeId: string;
}
