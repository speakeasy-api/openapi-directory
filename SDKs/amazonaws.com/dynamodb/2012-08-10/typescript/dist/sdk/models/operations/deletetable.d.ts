import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTableXAmzTargetEnum {
    DynamoDB20120810DeleteTable = "DynamoDB_20120810.DeleteTable"
}
export declare class DeleteTableRequest extends SpeakeasyBase {
    deleteTableInput: shared.DeleteTableInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTableXAmzTargetEnum;
}
export declare class DeleteTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTableOutput?: shared.DeleteTableOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
