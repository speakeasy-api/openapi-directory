import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDatalakeAutoEnableRequestBody extends SpeakeasyBase {
    /**
     * Remove automatic enablement of configuration settings for new member accounts in Security Lake.
     */
    removeFromConfigurationForNewAccounts: shared.AutoEnableNewRegionConfiguration[];
}
export declare class DeleteDatalakeAutoEnableRequest extends SpeakeasyBase {
    requestBody: DeleteDatalakeAutoEnableRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDatalakeAutoEnableResponse extends SpeakeasyBase {
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
    deleteDatalakeAutoEnableResponse?: Record<string, any>;
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
