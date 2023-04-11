import { SpeakeasyBase } from "../../../internal/utils";
import { CanvasAppSettings } from "./canvasappsettings";
import { JupyterServerAppSettings } from "./jupyterserverappsettings";
import { KernelGatewayAppSettings } from "./kernelgatewayappsettings";
import { RSessionAppSettings } from "./rsessionappsettings";
import { RStudioServerProAppSettings } from "./rstudioserverproappsettings";
import { SharingSettings } from "./sharingsettings";
import { TensorBoardAppSettings } from "./tensorboardappsettings";
/**
 * <p>A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the <code>CreateUserProfile</code> API is called, and as <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called.</p> <p> <code>SecurityGroups</code> is aggregated when specified in both calls. For all other settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code> take precedence over those specified in <code>CreateDomain</code>.</p>
 */
export declare class UserSettings extends SpeakeasyBase {
    canvasAppSettings?: CanvasAppSettings;
    executionRole?: string;
    jupyterServerAppSettings?: JupyterServerAppSettings;
    kernelGatewayAppSettings?: KernelGatewayAppSettings;
    rSessionAppSettings?: RSessionAppSettings;
    rStudioServerProAppSettings?: RStudioServerProAppSettings;
    securityGroups?: string[];
    sharingSettings?: SharingSettings;
    tensorBoardAppSettings?: TensorBoardAppSettings;
}
