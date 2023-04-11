import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePreparedStatementXAmzTargetEnum {
    AmazonAthenaCreatePreparedStatement = "AmazonAthena.CreatePreparedStatement"
}
export declare class CreatePreparedStatementRequest extends SpeakeasyBase {
    createPreparedStatementInput: shared.CreatePreparedStatementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePreparedStatementXAmzTargetEnum;
}
export declare class CreatePreparedStatementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPreparedStatementOutput?: Record<string, any>;
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
}
