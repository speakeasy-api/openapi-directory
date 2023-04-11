import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateDatalakeDelegatedAdminRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID of the Security Lake delegated administrator.
     */
    account: string;
}
export declare class CreateDatalakeDelegatedAdminRequest extends SpeakeasyBase {
    requestBody: CreateDatalakeDelegatedAdminRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDatalakeDelegatedAdminResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createDatalakeDelegatedAdminResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
