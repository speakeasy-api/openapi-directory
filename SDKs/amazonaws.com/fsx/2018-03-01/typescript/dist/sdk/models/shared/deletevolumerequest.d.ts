import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteVolumeOntapConfiguration } from "./deletevolumeontapconfiguration";
import { DeleteVolumeOpenZFSConfiguration } from "./deletevolumeopenzfsconfiguration";
export declare class DeleteVolumeRequest extends SpeakeasyBase {
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    ontapConfiguration?: DeleteVolumeOntapConfiguration;
    openZFSConfiguration?: DeleteVolumeOpenZFSConfiguration;
    volumeId: string;
}
