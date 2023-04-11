import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMailboxDetailsXAmzTargetEnum {
    WorkMailServiceGetMailboxDetails = "WorkMailService.GetMailboxDetails"
}
export declare class GetMailboxDetailsRequest extends SpeakeasyBase {
    getMailboxDetailsRequest: shared.GetMailboxDetailsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMailboxDetailsXAmzTargetEnum;
}
export declare class GetMailboxDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getMailboxDetailsResponse?: shared.GetMailboxDetailsResponse;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
