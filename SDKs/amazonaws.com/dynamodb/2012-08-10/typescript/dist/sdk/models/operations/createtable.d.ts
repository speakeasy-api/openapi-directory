import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTableXAmzTargetEnum {
    DynamoDB20120810CreateTable = "DynamoDB_20120810.CreateTable"
}
export declare class CreateTableRequest extends SpeakeasyBase {
    createTableInput: shared.CreateTableInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTableXAmzTargetEnum;
}
export declare class CreateTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTableOutput?: shared.CreateTableOutput;
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
}
