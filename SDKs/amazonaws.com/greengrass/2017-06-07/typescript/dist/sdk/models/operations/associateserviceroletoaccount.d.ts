import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssociateServiceRoleToAccountRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the service role you wish to associate with your account.
     */
    roleArn: string;
}
export declare class AssociateServiceRoleToAccountRequest extends SpeakeasyBase {
    requestBody: AssociateServiceRoleToAccountRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateServiceRoleToAccountResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateServiceRoleToAccountResponse?: shared.AssociateServiceRoleToAccountResponse;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
