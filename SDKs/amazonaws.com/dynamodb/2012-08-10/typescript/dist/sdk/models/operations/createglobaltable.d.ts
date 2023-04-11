import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGlobalTableXAmzTargetEnum {
    DynamoDB20120810CreateGlobalTable = "DynamoDB_20120810.CreateGlobalTable"
}
export declare class CreateGlobalTableRequest extends SpeakeasyBase {
    createGlobalTableInput: shared.CreateGlobalTableInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGlobalTableXAmzTargetEnum;
}
export declare class CreateGlobalTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGlobalTableOutput?: shared.CreateGlobalTableOutput;
    /**
     * GlobalTableAlreadyExistsException
     */
    globalTableAlreadyExistsException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TableNotFoundException
     */
    tableNotFoundException?: any;
}
