import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPreparedStatementXAmzTargetEnum {
    AmazonAthenaGetPreparedStatement = "AmazonAthena.GetPreparedStatement"
}
export declare class GetPreparedStatementRequest extends SpeakeasyBase {
    getPreparedStatementInput: shared.GetPreparedStatementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPreparedStatementXAmzTargetEnum;
}
export declare class GetPreparedStatementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPreparedStatementOutput?: shared.GetPreparedStatementOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
