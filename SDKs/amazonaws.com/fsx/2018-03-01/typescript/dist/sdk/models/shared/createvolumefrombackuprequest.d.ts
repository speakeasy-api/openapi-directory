import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOntapVolumeConfiguration } from "./createontapvolumeconfiguration";
import { Tag } from "./tag";
export declare class CreateVolumeFromBackupRequest extends SpeakeasyBase {
    /**
     * The ID of the source backup. Specifies the backup that you are copying.
     */
    backupId: string;
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    name: string;
    ontapConfiguration?: CreateOntapVolumeConfiguration;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
}
