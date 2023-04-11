import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDataSourceXAmzTargetEnum {
    AmazonML20141212DeleteDataSource = "AmazonML_20141212.DeleteDataSource"
}
export declare class DeleteDataSourceRequest extends SpeakeasyBase {
    deleteDataSourceInput: shared.DeleteDataSourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataSourceXAmzTargetEnum;
}
export declare class DeleteDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDataSourceOutput?: shared.DeleteDataSourceOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
