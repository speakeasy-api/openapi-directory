import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePreparedStatementXAmzTargetEnum {
    AmazonAthenaDeletePreparedStatement = "AmazonAthena.DeletePreparedStatement"
}
export declare class DeletePreparedStatementRequest extends SpeakeasyBase {
    deletePreparedStatementInput: shared.DeletePreparedStatementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePreparedStatementXAmzTargetEnum;
}
export declare class DeletePreparedStatementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletePreparedStatementOutput?: Record<string, any>;
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
