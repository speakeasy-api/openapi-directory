import { SpeakeasyBase } from "../../../internal/utils";
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceMetadataServiceConfiguration } from "./instancemetadataserviceconfiguration";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";
import { RootAccessEnum } from "./rootaccessenum";
/**
 * Success
 */
export declare class DescribeNotebookInstanceOutput extends SpeakeasyBase {
    acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];
    additionalCodeRepositories?: string[];
    creationTime?: Date;
    defaultCodeRepository?: string;
    directInternetAccess?: DirectInternetAccessEnum;
    failureReason?: string;
    instanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
    instanceType?: InstanceTypeEnum;
    kmsKeyId?: string;
    lastModifiedTime?: Date;
    networkInterfaceId?: string;
    notebookInstanceArn?: string;
    notebookInstanceLifecycleConfigName?: string;
    notebookInstanceName?: string;
    notebookInstanceStatus?: NotebookInstanceStatusEnum;
    platformIdentifier?: string;
    roleArn?: string;
    rootAccess?: RootAccessEnum;
    securityGroups?: string[];
    subnetId?: string;
    url?: string;
    volumeSizeInGB?: number;
}
