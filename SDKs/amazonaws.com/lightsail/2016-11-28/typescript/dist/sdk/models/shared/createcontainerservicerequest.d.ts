import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceDeploymentRequest } from "./containerservicedeploymentrequest";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { PrivateRegistryAccessRequest } from "./privateregistryaccessrequest";
import { Tag } from "./tag";
export declare class CreateContainerServiceRequest extends SpeakeasyBase {
    deployment?: ContainerServiceDeploymentRequest;
    power: ContainerServicePowerNameEnum;
    privateRegistryAccess?: PrivateRegistryAccessRequest;
    publicDomainNames?: Record<string, string[]>;
    scale: number;
    serviceName: string;
    tags?: Tag[];
}
