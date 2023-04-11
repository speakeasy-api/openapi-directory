import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadataServiceConfiguration } from "./instancemetadataserviceconfiguration";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { RootAccessEnum } from "./rootaccessenum";
export declare class UpdateNotebookInstanceInput extends SpeakeasyBase {
    acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];
    additionalCodeRepositories?: string[];
    defaultCodeRepository?: string;
    disassociateAcceleratorTypes?: boolean;
    disassociateAdditionalCodeRepositories?: boolean;
    disassociateDefaultCodeRepository?: boolean;
    disassociateLifecycleConfig?: boolean;
    instanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
    instanceType?: InstanceTypeEnum;
    lifecycleConfigName?: string;
    notebookInstanceName: string;
    roleArn?: string;
    rootAccess?: RootAccessEnum;
    volumeSizeInGB?: number;
}
