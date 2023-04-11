import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateTagOption = "AWS242ServiceCatalogService.CreateTagOption"
}
export declare class CreateTagOptionRequest extends SpeakeasyBase {
    createTagOptionInput: shared.CreateTagOptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTagOptionXAmzTargetEnum;
}
export declare class CreateTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTagOptionOutput?: shared.CreateTagOptionOutput;
    /**
     * DuplicateResourceException
     */
    duplicateResourceException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
