import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssociateServiceRoleToAccountRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the service role to associate with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
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
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
