import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyInstanceFleetXAmzTargetEnum {
    ElasticMapReduceModifyInstanceFleet = "ElasticMapReduce.ModifyInstanceFleet"
}
export declare class ModifyInstanceFleetRequest extends SpeakeasyBase {
    modifyInstanceFleetInput: shared.ModifyInstanceFleetInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyInstanceFleetXAmzTargetEnum;
}
export declare class ModifyInstanceFleetResponse extends SpeakeasyBase {
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
