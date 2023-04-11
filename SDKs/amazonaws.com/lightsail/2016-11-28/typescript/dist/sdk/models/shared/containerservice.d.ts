import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceDeployment } from "./containerservicedeployment";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { ContainerServiceStateDetail } from "./containerservicestatedetail";
import { ContainerServiceStateEnum } from "./containerservicestateenum";
import { PrivateRegistryAccess } from "./privateregistryaccess";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes an Amazon Lightsail container service.
 */
export declare class ContainerService extends SpeakeasyBase {
    arn?: string;
    containerServiceName?: string;
    createdAt?: Date;
    currentDeployment?: ContainerServiceDeployment;
    isDisabled?: boolean;
    location?: ResourceLocation;
    nextDeployment?: ContainerServiceDeployment;
    power?: ContainerServicePowerNameEnum;
    powerId?: string;
    principalArn?: string;
    privateDomainName?: string;
    privateRegistryAccess?: PrivateRegistryAccess;
    publicDomainNames?: Record<string, string[]>;
    resourceType?: ResourceTypeEnum;
    scale?: number;
    state?: ContainerServiceStateEnum;
    stateDetail?: ContainerServiceStateDetail;
    tags?: Tag[];
    url?: string;
}
