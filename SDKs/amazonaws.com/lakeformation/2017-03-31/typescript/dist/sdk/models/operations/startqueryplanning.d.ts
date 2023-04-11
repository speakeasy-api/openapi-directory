import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure containing information about the query plan.
 */
export declare class StartQueryPlanningRequestBodyQueryPlanningContext extends SpeakeasyBase {
    catalogId?: string;
    databaseName?: string;
    queryAsOfTime?: Date;
    queryParameters?: Record<string, string>;
    transactionId?: string;
}
export declare class StartQueryPlanningRequestBody extends SpeakeasyBase {
    /**
     * A structure containing information about the query plan.
     */
    queryPlanningContext: StartQueryPlanningRequestBodyQueryPlanningContext;
    /**
     * A PartiQL query statement used as an input to the planner service.
     */
    queryString: string;
}
export declare class StartQueryPlanningRequest extends SpeakeasyBase {
    requestBody: StartQueryPlanningRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartQueryPlanningResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    startQueryPlanningResponse?: shared.StartQueryPlanningResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
