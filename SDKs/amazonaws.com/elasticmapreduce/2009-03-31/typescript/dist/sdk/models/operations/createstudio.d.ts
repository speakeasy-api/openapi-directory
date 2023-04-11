import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateStudioXAmzTargetEnum {
    ElasticMapReduceCreateStudio = "ElasticMapReduce.CreateStudio"
}
export declare class CreateStudioRequest extends SpeakeasyBase {
    createStudioInput: shared.CreateStudioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStudioXAmzTargetEnum;
}
export declare class CreateStudioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createStudioOutput?: shared.CreateStudioOutput;
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
