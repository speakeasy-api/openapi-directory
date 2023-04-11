import { SpeakeasyBase } from "../../../internal/utils";
import { JupyterServerAppSettings } from "./jupyterserverappsettings";
import { KernelGatewayAppSettings } from "./kernelgatewayappsettings";
/**
 * A collection of space settings.
 */
export declare class SpaceSettings extends SpeakeasyBase {
    /**
     * The JupyterServer app settings.
     */
    jupyterServerAppSettings?: JupyterServerAppSettings;
    /**
     * The KernelGateway app settings.
     */
    kernelGatewayAppSettings?: KernelGatewayAppSettings;
}
