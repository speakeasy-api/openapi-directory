import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { PrivateRegistryAccessRequest } from "./privateregistryaccessrequest";
export declare class UpdateContainerServiceRequest extends SpeakeasyBase {
    isDisabled?: boolean;
    power?: ContainerServicePowerNameEnum;
    privateRegistryAccess?: PrivateRegistryAccessRequest;
    publicDomainNames?: Record<string, string[]>;
    scale?: number;
    serviceName: string;
}
