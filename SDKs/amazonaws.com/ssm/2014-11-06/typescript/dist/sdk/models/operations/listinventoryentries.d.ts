import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInventoryEntriesXAmzTargetEnum {
    AmazonSSMListInventoryEntries = "AmazonSSM.ListInventoryEntries"
}
export declare class ListInventoryEntriesRequest extends SpeakeasyBase {
    listInventoryEntriesRequest: shared.ListInventoryEntriesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInventoryEntriesXAmzTargetEnum;
}
export declare class ListInventoryEntriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilter
     */
    invalidFilter?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * InvalidTypeNameException
     */
    invalidTypeNameException?: any;
    /**
     * Success
     */
    listInventoryEntriesResult?: shared.ListInventoryEntriesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
