import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains configurations for protected query results.
 */
export declare class StartProtectedQueryRequestBodyResultConfiguration extends SpeakeasyBase {
    outputConfiguration?: shared.ProtectedQueryOutputConfiguration;
}
/**
 * The parameters for the SQL type Protected Query.
 */
export declare class StartProtectedQueryRequestBodySqlParameters extends SpeakeasyBase {
    queryString?: string;
}
/**
 * The type of the protected query to be started.
 */
export declare enum StartProtectedQueryRequestBodyTypeEnum {
    Sql = "SQL"
}
export declare class StartProtectedQueryRequestBody extends SpeakeasyBase {
    /**
     * Contains configurations for protected query results.
     */
    resultConfiguration: StartProtectedQueryRequestBodyResultConfiguration;
    /**
     * The parameters for the SQL type Protected Query.
     */
    sqlParameters: StartProtectedQueryRequestBodySqlParameters;
    /**
     * The type of the protected query to be started.
     */
    type: StartProtectedQueryRequestBodyTypeEnum;
}
export declare class StartProtectedQueryRequest extends SpeakeasyBase {
    requestBody: StartProtectedQueryRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier for the membership to run this query against. Currently accepts a membership ID.
     */
    membershipIdentifier: string;
}
export declare class StartProtectedQueryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startProtectedQueryOutput?: shared.StartProtectedQueryOutput;
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
