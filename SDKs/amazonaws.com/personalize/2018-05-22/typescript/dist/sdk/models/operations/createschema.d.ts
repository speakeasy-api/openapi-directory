import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSchemaXAmzTargetEnum {
    AmazonPersonalizeCreateSchema = "AmazonPersonalize.CreateSchema"
}
export declare class CreateSchemaRequest extends SpeakeasyBase {
    createSchemaRequest: shared.CreateSchemaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSchemaXAmzTargetEnum;
}
export declare class CreateSchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSchemaResponse?: shared.CreateSchemaResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
