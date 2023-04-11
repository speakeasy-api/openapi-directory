import { SpeakeasyBase } from "../../../internal/utils";
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceMetadataServiceConfiguration } from "./instancemetadataserviceconfiguration";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { RootAccessEnum } from "./rootaccessenum";
import { Tag } from "./tag";
export declare class CreateNotebookInstanceInput extends SpeakeasyBase {
    acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];
    additionalCodeRepositories?: string[];
    defaultCodeRepository?: string;
    directInternetAccess?: DirectInternetAccessEnum;
    instanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
    instanceType: InstanceTypeEnum;
    kmsKeyId?: string;
    lifecycleConfigName?: string;
    notebookInstanceName: string;
    platformIdentifier?: string;
    roleArn: string;
    rootAccess?: RootAccessEnum;
    securityGroupIds?: string[];
    subnetId?: string;
    tags?: Tag[];
    volumeSizeInGB?: number;
}
