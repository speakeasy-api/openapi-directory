import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>The case severity for a support case that you want to receive notifications.</p> <p>If you specify <code>high</code> or <code>all</code>, at least one of the following parameters must be <code>true</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <p>If you specify <code>none</code>, any of the following parameters that you specify in your request must be <code>false</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <note> <p>If you don't specify these parameters in your request, the Amazon Web Services Support App uses the current values by default.</p> </note>
 */
export declare enum UpdateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum {
    None = "none",
    All = "all",
    High = "high"
}
export declare class UpdateSlackChannelConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
     */
    channelId: string;
    /**
     * The Slack channel name that you want to update.
     */
    channelName?: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.
     */
    channelRoleArn?: string;
    /**
     * Whether you want to get notified when a support case has a new correspondence.
     */
    notifyOnAddCorrespondenceToCase?: boolean;
    /**
     * <p>The case severity for a support case that you want to receive notifications.</p> <p>If you specify <code>high</code> or <code>all</code>, at least one of the following parameters must be <code>true</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <p>If you specify <code>none</code>, any of the following parameters that you specify in your request must be <code>false</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <note> <p>If you don't specify these parameters in your request, the Amazon Web Services Support App uses the current values by default.</p> </note>
     */
    notifyOnCaseSeverity?: UpdateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;
    /**
     * Whether you want to get notified when a support case is created or reopened.
     */
    notifyOnCreateOrReopenCase?: boolean;
    /**
     * Whether you want to get notified when a support case is resolved.
     */
    notifyOnResolveCase?: boolean;
    /**
     * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
     */
    teamId: string;
}
export declare class UpdateSlackChannelConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateSlackChannelConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSlackChannelConfigurationResponse extends SpeakeasyBase {
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSlackChannelConfigurationResult?: shared.UpdateSlackChannelConfigurationResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
