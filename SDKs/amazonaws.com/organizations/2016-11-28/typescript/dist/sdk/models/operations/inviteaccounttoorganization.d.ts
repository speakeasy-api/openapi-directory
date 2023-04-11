import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InviteAccountToOrganizationXAmzTargetEnum {
    AWSOrganizationsV20161128InviteAccountToOrganization = "AWSOrganizationsV20161128.InviteAccountToOrganization"
}
export declare class InviteAccountToOrganizationRequest extends SpeakeasyBase {
    inviteAccountToOrganizationRequest: shared.InviteAccountToOrganizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InviteAccountToOrganizationXAmzTargetEnum;
}
export declare class InviteAccountToOrganizationResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountOwnerNotVerifiedException
     */
    accountOwnerNotVerifiedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    /**
     * ConstraintViolationException
     */
    constraintViolationException?: any;
    contentType: string;
    /**
     * DuplicateHandshakeException
     */
    duplicateHandshakeException?: any;
    /**
     * FinalizingOrganizationException
     */
    finalizingOrganizationException?: any;
    /**
     * HandshakeConstraintViolationException
     */
    handshakeConstraintViolationException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    inviteAccountToOrganizationResponse?: shared.InviteAccountToOrganizationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
