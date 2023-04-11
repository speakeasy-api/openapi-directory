import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOpsMetadataXAmzTargetEnum {
    AmazonSSMListOpsMetadata = "AmazonSSM.ListOpsMetadata"
}
export declare class ListOpsMetadataRequest extends SpeakeasyBase {
    listOpsMetadataRequest: shared.ListOpsMetadataRequest;
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
    xAmzTarget: ListOpsMetadataXAmzTargetEnum;
}
export declare class ListOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listOpsMetadataResult?: shared.ListOpsMetadataResult;
    /**
     * OpsMetadataInvalidArgumentException
     */
    opsMetadataInvalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
