import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourceSetsXAmzTargetEnum {
    AWSFMS20180101ListResourceSets = "AWSFMS_20180101.ListResourceSets"
}
export declare class ListResourceSetsRequest extends SpeakeasyBase {
    listResourceSetsRequest: shared.ListResourceSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceSetsXAmzTargetEnum;
}
export declare class ListResourceSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * Success
     */
    listResourceSetsResponse?: shared.ListResourceSetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
