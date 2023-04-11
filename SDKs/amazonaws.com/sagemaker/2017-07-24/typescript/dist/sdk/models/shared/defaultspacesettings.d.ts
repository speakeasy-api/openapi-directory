import { SpeakeasyBase } from "../../../internal/utils";
import { JupyterServerAppSettings } from "./jupyterserverappsettings";
import { KernelGatewayAppSettings } from "./kernelgatewayappsettings";
/**
 * A collection of settings that apply to spaces created in the Domain.
 */
export declare class DefaultSpaceSettings extends SpeakeasyBase {
    executionRole?: string;
    /**
     * The JupyterServer app settings.
     */
    jupyterServerAppSettings?: JupyterServerAppSettings;
    /**
     * The KernelGateway app settings.
     */
    kernelGatewayAppSettings?: KernelGatewayAppSettings;
    securityGroups?: string[];
}
