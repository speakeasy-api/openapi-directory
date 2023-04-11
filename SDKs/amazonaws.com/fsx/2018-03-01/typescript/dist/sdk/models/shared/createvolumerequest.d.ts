import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOntapVolumeConfiguration } from "./createontapvolumeconfiguration";
import { CreateOpenZFSVolumeConfiguration } from "./createopenzfsvolumeconfiguration";
import { Tag } from "./tag";
import { VolumeTypeEnum } from "./volumetypeenum";
export declare class CreateVolumeRequest extends SpeakeasyBase {
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    name: string;
    ontapConfiguration?: CreateOntapVolumeConfiguration;
    openZFSConfiguration?: CreateOpenZFSVolumeConfiguration;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
    volumeType: VolumeTypeEnum;
}
