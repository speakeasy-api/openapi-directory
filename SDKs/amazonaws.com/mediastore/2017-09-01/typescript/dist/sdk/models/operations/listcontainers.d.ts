import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListContainersXAmzTargetEnum {
    MediaStore20170901ListContainers = "MediaStore_20170901.ListContainers"
}
export declare class ListContainersRequest extends SpeakeasyBase {
    listContainersInput: shared.ListContainersInput;
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
    xAmzTarget: ListContainersXAmzTargetEnum;
}
export declare class ListContainersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listContainersOutput?: shared.ListContainersOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
