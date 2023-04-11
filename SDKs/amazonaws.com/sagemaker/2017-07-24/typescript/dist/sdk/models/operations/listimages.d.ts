import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListImagesXAmzTargetEnum {
    SageMakerListImages = "SageMaker.ListImages"
}
export declare class ListImagesRequest extends SpeakeasyBase {
    listImagesRequest: shared.ListImagesRequest;
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
    xAmzTarget: ListImagesXAmzTargetEnum;
}
export declare class ListImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listImagesResponse?: shared.ListImagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
