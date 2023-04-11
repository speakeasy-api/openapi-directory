import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MoveAccountXAmzTargetEnum {
    AWSOrganizationsV20161128MoveAccount = "AWSOrganizationsV20161128.MoveAccount"
}
export declare class MoveAccountRequest extends SpeakeasyBase {
    moveAccountRequest: shared.MoveAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MoveAccountXAmzTargetEnum;
}
export declare class MoveAccountResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * DestinationParentNotFoundException
     */
    destinationParentNotFoundException?: any;
    /**
     * DuplicateAccountException
     */
    duplicateAccountException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * SourceParentNotFoundException
     */
    sourceParentNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
