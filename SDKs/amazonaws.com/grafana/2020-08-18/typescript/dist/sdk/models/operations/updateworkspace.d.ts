import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify <code>ORGANIZATION</code>, you must specify which organizational units the workspace can access in the <code>workspaceOrganizationalUnits</code> parameter.
 */
export declare enum UpdateWorkspaceRequestBodyAccountAccessTypeEnum {
    CurrentAccount = "CURRENT_ACCOUNT",
    Organization = "ORGANIZATION"
}
/**
 * <p>The configuration settings for in-bound network access to your workspace.</p> <p>When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization will still be required.</p> <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.</p>
 */
export declare class UpdateWorkspaceRequestBodyNetworkAccessControl extends SpeakeasyBase {
    prefixListIds?: string[];
    vpceIds?: string[];
}
/**
 * <p>Use this parameter if you want to change a workspace from <code>SERVICE_MANAGED</code> to <code>CUSTOMER_MANAGED</code>. This allows you to manage the permissions that the workspace uses to access datasources and notification channels. If the workspace is in a member Amazon Web Services account of an organization, and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, you must choose <code>CUSTOMER_MANAGED</code>.</p> <p>If you specify this as <code>CUSTOMER_MANAGED</code>, you must also specify a <code>workspaceRoleArn</code> that the workspace will use for accessing Amazon Web Services resources.</p> <p>For more information on the role and permissions needed, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels</a> </p> <note> <p>Do not use this to convert a <code>CUSTOMER_MANAGED</code> workspace to <code>SERVICE_MANAGED</code>. Do not include this parameter if you want to leave the workspace as <code>SERVICE_MANAGED</code>.</p> <p>You can convert a <code>CUSTOMER_MANAGED</code> workspace to <code>SERVICE_MANAGED</code> using the Amazon Managed Grafana console. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html">Managing permissions for data sources and notification channels</a>.</p> </note>
 */
export declare enum UpdateWorkspaceRequestBodyPermissionTypeEnum {
    CustomerManaged = "CUSTOMER_MANAGED",
    ServiceManaged = "SERVICE_MANAGED"
}
/**
 * <p>The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.</p> <note> <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of the same VPC.</p> </note>
 */
export declare class UpdateWorkspaceRequestBodyVpcConfiguration extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class UpdateWorkspaceRequestBody extends SpeakeasyBase {
    /**
     * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify <code>ORGANIZATION</code>, you must specify which organizational units the workspace can access in the <code>workspaceOrganizationalUnits</code> parameter.
     */
    accountAccessType?: UpdateWorkspaceRequestBodyAccountAccessTypeEnum;
    /**
     * <p>The configuration settings for in-bound network access to your workspace.</p> <p>When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization will still be required.</p> <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.</p>
     */
    networkAccessControl?: UpdateWorkspaceRequestBodyNetworkAccessControl;
    /**
     * The name of an IAM role that already exists to use to access resources through Organizations. This can only be used with a workspace that has the <code>permissionType</code> set to <code>CUSTOMER_MANAGED</code>.
     */
    organizationRoleName?: string;
    /**
     * <p>Use this parameter if you want to change a workspace from <code>SERVICE_MANAGED</code> to <code>CUSTOMER_MANAGED</code>. This allows you to manage the permissions that the workspace uses to access datasources and notification channels. If the workspace is in a member Amazon Web Services account of an organization, and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, you must choose <code>CUSTOMER_MANAGED</code>.</p> <p>If you specify this as <code>CUSTOMER_MANAGED</code>, you must also specify a <code>workspaceRoleArn</code> that the workspace will use for accessing Amazon Web Services resources.</p> <p>For more information on the role and permissions needed, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels</a> </p> <note> <p>Do not use this to convert a <code>CUSTOMER_MANAGED</code> workspace to <code>SERVICE_MANAGED</code>. Do not include this parameter if you want to leave the workspace as <code>SERVICE_MANAGED</code>.</p> <p>You can convert a <code>CUSTOMER_MANAGED</code> workspace to <code>SERVICE_MANAGED</code> using the Amazon Managed Grafana console. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html">Managing permissions for data sources and notification channels</a>.</p> </note>
     */
    permissionType?: UpdateWorkspaceRequestBodyPermissionTypeEnum;
    /**
     * <p>Whether to remove the network access configuration from the workspace.</p> <p>Setting this to <code>true</code> and providing a <code>networkAccessControl</code> to set will return an error.</p> <p>If you remove this configuration by setting this to <code>true</code>, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.</p>
     */
    removeNetworkAccessConfiguration?: boolean;
    /**
     * <p>Whether to remove the VPC configuration from the workspace.</p> <p>Setting this to <code>true</code> and providing a <code>vpcConfiguration</code> to set will return an error.</p>
     */
    removeVpcConfiguration?: boolean;
    /**
     * The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace.
     */
    stackSetName?: string;
    /**
     * <p>The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.</p> <note> <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of the same VPC.</p> </note>
     */
    vpcConfiguration?: UpdateWorkspaceRequestBodyVpcConfiguration;
    /**
     * This parameter is for internal use only, and should not be used.
     */
    workspaceDataSources?: shared.DataSourceTypeEnum[];
    /**
     * A description for the workspace. This is used only to help you identify this workspace.
     */
    workspaceDescription?: string;
    /**
     * A new name for the workspace to update.
     */
    workspaceName?: string;
    /**
     * Specify the Amazon Web Services notification channels that you plan to use in this workspace. Specifying these data sources here enables Amazon Managed Grafana to create IAM roles and permissions that allow Amazon Managed Grafana to use these channels.
     */
    workspaceNotificationDestinations?: shared.NotificationDestinationTypeEnum[];
    /**
     * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
     */
    workspaceOrganizationalUnits?: string[];
    /**
     * Specifies an IAM role that grants permissions to Amazon Web Services resources that the workspace accesses, such as data sources and notification channels. If this workspace has <code>permissionType</code> <code>CUSTOMER_MANAGED</code>, then this role is required.
     */
    workspaceRoleArn?: string;
}
export declare class UpdateWorkspaceRequest extends SpeakeasyBase {
    requestBody: UpdateWorkspaceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace to update.
     */
    workspaceId: string;
}
export declare class UpdateWorkspaceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateWorkspaceResponse?: shared.UpdateWorkspaceResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
