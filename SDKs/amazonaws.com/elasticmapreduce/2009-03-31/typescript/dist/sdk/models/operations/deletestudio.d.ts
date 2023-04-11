import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteStudioXAmzTargetEnum {
    ElasticMapReduceDeleteStudio = "ElasticMapReduce.DeleteStudio"
}
export declare class DeleteStudioRequest extends SpeakeasyBase {
    deleteStudioInput: shared.DeleteStudioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStudioXAmzTargetEnum;
}
export declare class DeleteStudioResponse extends SpeakeasyBase {
    contentType: string;
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
