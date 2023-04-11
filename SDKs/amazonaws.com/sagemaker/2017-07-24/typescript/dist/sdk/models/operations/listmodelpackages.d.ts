import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelPackagesXAmzTargetEnum {
    SageMakerListModelPackages = "SageMaker.ListModelPackages"
}
export declare class ListModelPackagesRequest extends SpeakeasyBase {
    listModelPackagesInput: shared.ListModelPackagesInput;
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
    xAmzTarget: ListModelPackagesXAmzTargetEnum;
}
export declare class ListModelPackagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelPackagesOutput?: shared.ListModelPackagesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
