import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBuildBatchXAmzTargetEnum {
    CodeBuild20161006DeleteBuildBatch = "CodeBuild_20161006.DeleteBuildBatch"
}
export declare class DeleteBuildBatchRequest extends SpeakeasyBase {
    deleteBuildBatchInput: shared.DeleteBuildBatchInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBuildBatchXAmzTargetEnum;
}
export declare class DeleteBuildBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteBuildBatchOutput?: shared.DeleteBuildBatchOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
