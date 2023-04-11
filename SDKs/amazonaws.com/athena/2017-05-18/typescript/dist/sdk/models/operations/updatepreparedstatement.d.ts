import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePreparedStatementXAmzTargetEnum {
    AmazonAthenaUpdatePreparedStatement = "AmazonAthena.UpdatePreparedStatement"
}
export declare class UpdatePreparedStatementRequest extends SpeakeasyBase {
    updatePreparedStatementInput: shared.UpdatePreparedStatementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePreparedStatementXAmzTargetEnum;
}
export declare class UpdatePreparedStatementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updatePreparedStatementOutput?: Record<string, any>;
}
