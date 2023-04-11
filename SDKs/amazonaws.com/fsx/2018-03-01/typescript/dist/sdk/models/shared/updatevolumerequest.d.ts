import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateOntapVolumeConfiguration } from "./updateontapvolumeconfiguration";
import { UpdateOpenZFSVolumeConfiguration } from "./updateopenzfsvolumeconfiguration";
export declare class UpdateVolumeRequest extends SpeakeasyBase {
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    name?: string;
    ontapConfiguration?: UpdateOntapVolumeConfiguration;
    openZFSConfiguration?: UpdateOpenZFSVolumeConfiguration;
    volumeId: string;
}
