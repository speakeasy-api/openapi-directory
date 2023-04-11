import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateStudioXAmzTargetEnum {
    ElasticMapReduceUpdateStudio = "ElasticMapReduce.UpdateStudio"
}
export declare class UpdateStudioRequest extends SpeakeasyBase {
    updateStudioInput: shared.UpdateStudioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStudioXAmzTargetEnum;
}
export declare class UpdateStudioResponse extends SpeakeasyBase {
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
