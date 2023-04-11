import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSecretsXAmzTargetEnum {
    SecretsmanagerListSecrets = "secretsmanager.ListSecrets"
}
export declare class ListSecretsRequest extends SpeakeasyBase {
    listSecretsRequest: shared.ListSecretsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSecretsXAmzTargetEnum;
}
export declare class ListSecretsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listSecretsResponse?: shared.ListSecretsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
