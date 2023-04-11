import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListComplianceStatusXAmzTargetEnum {
    AWSFMS20180101ListComplianceStatus = "AWSFMS_20180101.ListComplianceStatus"
}
export declare class ListComplianceStatusRequest extends SpeakeasyBase {
    listComplianceStatusRequest: shared.ListComplianceStatusRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListComplianceStatusXAmzTargetEnum;
}
export declare class ListComplianceStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * Success
     */
    listComplianceStatusResponse?: shared.ListComplianceStatusResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
