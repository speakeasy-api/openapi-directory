import { SpeakeasyBase } from "../../../internal/utils";
import { EKSOnDeviceServiceConfiguration } from "./eksondeviceserviceconfiguration";
import { NFSOnDeviceServiceConfiguration } from "./nfsondeviceserviceconfiguration";
import { TGWOnDeviceServiceConfiguration } from "./tgwondeviceserviceconfiguration";
/**
 * An object that represents the metadata and configuration settings for services on an Amazon Web Services Snow Family device.
 */
export declare class OnDeviceServiceConfiguration extends SpeakeasyBase {
    eksOnDeviceService?: EKSOnDeviceServiceConfiguration;
    nfsOnDeviceService?: NFSOnDeviceServiceConfiguration;
    tgwOnDeviceService?: TGWOnDeviceServiceConfiguration;
}
