import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInstanceFleetsXAmzTargetEnum {
    ElasticMapReduceListInstanceFleets = "ElasticMapReduce.ListInstanceFleets"
}
export declare class ListInstanceFleetsRequest extends SpeakeasyBase {
    listInstanceFleetsInput: shared.ListInstanceFleetsInput;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstanceFleetsXAmzTargetEnum;
}
export declare class ListInstanceFleetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listInstanceFleetsOutput?: shared.ListInstanceFleetsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
