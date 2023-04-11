import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddInstanceFleetXAmzTargetEnum {
    ElasticMapReduceAddInstanceFleet = "ElasticMapReduce.AddInstanceFleet"
}
export declare class AddInstanceFleetRequest extends SpeakeasyBase {
    addInstanceFleetInput: shared.AddInstanceFleetInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddInstanceFleetXAmzTargetEnum;
}
export declare class AddInstanceFleetResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addInstanceFleetOutput?: shared.AddInstanceFleetOutput;
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
