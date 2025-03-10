import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisableRegionRequestBody extends SpeakeasyBase {
    /**
     * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p>
     */
    accountId?: string;
    /**
     * Specifies the Region-code for a given Region name (for example, <code>af-south-1</code>). When you disable a Region, Amazon Web Services performs actions to deactivate that Region in your account, such as destroying IAM resources in the Region. This process takes a few minutes for most accounts, but this can take several hours. You cannot enable the Region until the disabling process is fully completed.
     */
    regionName: string;
}
export declare class DisableRegionRequest extends SpeakeasyBase {
    requestBody: DisableRegionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableRegionResponse extends SpeakeasyBase {
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
