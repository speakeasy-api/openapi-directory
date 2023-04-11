import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Open Cybersecurity Schema Framework (OCSF) event class which describes the type of data that the custom source will send to Security Lake.
 */
export declare enum CreateCustomLogSourceRequestBodyEventClassEnum {
    AccessActivity = "ACCESS_ACTIVITY",
    FileActivity = "FILE_ACTIVITY",
    KernelActivity = "KERNEL_ACTIVITY",
    KernelExtension = "KERNEL_EXTENSION",
    MemoryActivity = "MEMORY_ACTIVITY",
    ModuleActivity = "MODULE_ACTIVITY",
    ProcessActivity = "PROCESS_ACTIVITY",
    RegistryKeyActivity = "REGISTRY_KEY_ACTIVITY",
    RegistryValueActivity = "REGISTRY_VALUE_ACTIVITY",
    ResourceActivity = "RESOURCE_ACTIVITY",
    ScheduledJobActivity = "SCHEDULED_JOB_ACTIVITY",
    SecurityFinding = "SECURITY_FINDING",
    AccountChange = "ACCOUNT_CHANGE",
    Authentication = "AUTHENTICATION",
    Authorization = "AUTHORIZATION",
    EntityManagementAudit = "ENTITY_MANAGEMENT_AUDIT",
    DhcpActivity = "DHCP_ACTIVITY",
    NetworkActivity = "NETWORK_ACTIVITY",
    DnsActivity = "DNS_ACTIVITY",
    FtpActivity = "FTP_ACTIVITY",
    HttpActivity = "HTTP_ACTIVITY",
    RdpActivity = "RDP_ACTIVITY",
    SmbActivity = "SMB_ACTIVITY",
    SshActivity = "SSH_ACTIVITY",
    CloudApi = "CLOUD_API",
    ContainerLifecycle = "CONTAINER_LIFECYCLE",
    DatabaseLifecycle = "DATABASE_LIFECYCLE",
    ConfigState = "CONFIG_STATE",
    CloudStorage = "CLOUD_STORAGE",
    InventoryInfo = "INVENTORY_INFO",
    RfbActivity = "RFB_ACTIVITY",
    SmtpActivity = "SMTP_ACTIVITY",
    VirtualMachineActivity = "VIRTUAL_MACHINE_ACTIVITY"
}
export declare class CreateCustomLogSourceRequestBody extends SpeakeasyBase {
    /**
     * The name for a third-party custom source. This must be a Regionally unique value.
     */
    customSourceName: string;
    /**
     * The Open Cybersecurity Schema Framework (OCSF) event class which describes the type of data that the custom source will send to Security Lake.
     */
    eventClass: CreateCustomLogSourceRequestBodyEventClassEnum;
    /**
     * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be used by the Glue crawler. The recommended IAM policies are:</p> <ul> <li> <p>The managed policy <code>AWSGlueServiceRole</code> </p> </li> <li> <p>A custom policy granting access to your Amazon S3 Data Lake</p> </li> </ul>
     */
    glueInvocationRoleArn: string;
    /**
     * The Amazon Web Services account ID of the custom source that will write logs and events into the Amazon S3 Data Lake.
     */
    logProviderAccountId: string;
}
export declare class CreateCustomLogSourceRequest extends SpeakeasyBase {
    requestBody: CreateCustomLogSourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCustomLogSourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * BucketNotFoundException
     */
    bucketNotFoundException?: any;
    /**
     * ConflictSourceNamesException
     */
    conflictSourceNamesException?: any;
    contentType: string;
    /**
     * Success
     */
    createCustomLogSourceResponse?: shared.CreateCustomLogSourceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
