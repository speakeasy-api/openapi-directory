import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelStatementXAmzTargetEnum {
    RedshiftDataCancelStatement = "RedshiftData.CancelStatement"
}
export declare class CancelStatementRequest extends SpeakeasyBase {
    cancelStatementRequest: shared.CancelStatementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelStatementXAmzTargetEnum;
}
export declare class CancelStatementResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelStatementResponse?: shared.CancelStatementResponse;
    contentType: string;
    /**
     * DatabaseConnectionException
     */
    databaseConnectionException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
