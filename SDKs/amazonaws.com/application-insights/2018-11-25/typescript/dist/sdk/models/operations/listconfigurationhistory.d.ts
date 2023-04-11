import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListConfigurationHistoryXAmzTargetEnum {
    Ec2WindowsBarleyServiceListConfigurationHistory = "EC2WindowsBarleyService.ListConfigurationHistory"
}
export declare class ListConfigurationHistoryRequest extends SpeakeasyBase {
    listConfigurationHistoryRequest: shared.ListConfigurationHistoryRequest;
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
    xAmzTarget: ListConfigurationHistoryXAmzTargetEnum;
}
export declare class ListConfigurationHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listConfigurationHistoryResponse?: shared.ListConfigurationHistoryResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
