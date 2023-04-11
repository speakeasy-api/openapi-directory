import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCompatibleImagesXAmzTargetEnum {
    AWSIESnowballJobManagementServiceListCompatibleImages = "AWSIESnowballJobManagementService.ListCompatibleImages"
}
export declare class ListCompatibleImagesRequest extends SpeakeasyBase {
    listCompatibleImagesRequest: shared.ListCompatibleImagesRequest;
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
    xAmzTarget: ListCompatibleImagesXAmzTargetEnum;
}
export declare class ListCompatibleImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Ec2RequestFailedException
     */
    ec2RequestFailedException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listCompatibleImagesResult?: shared.ListCompatibleImagesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
