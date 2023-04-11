import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDatalakeAutoEnableRequestBody extends SpeakeasyBase {
    /**
     * Enable Security Lake with the specified configuration settings to begin collecting security data for new accounts in your organization.
     */
    configurationForNewAccounts: shared.AutoEnableNewRegionConfiguration[];
}
export declare class CreateDatalakeAutoEnableRequest extends SpeakeasyBase {
    requestBody: CreateDatalakeAutoEnableRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDatalakeAutoEnableResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    createDatalakeAutoEnableResponse?: Record<string, any>;
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
