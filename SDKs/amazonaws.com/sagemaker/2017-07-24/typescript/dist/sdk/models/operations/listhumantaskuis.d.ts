import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHumanTaskUisXAmzTargetEnum {
    SageMakerListHumanTaskUis = "SageMaker.ListHumanTaskUis"
}
export declare class ListHumanTaskUisRequest extends SpeakeasyBase {
    listHumanTaskUisRequest: shared.ListHumanTaskUisRequest;
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
    xAmzTarget: ListHumanTaskUisXAmzTargetEnum;
}
export declare class ListHumanTaskUisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listHumanTaskUisResponse?: shared.ListHumanTaskUisResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
