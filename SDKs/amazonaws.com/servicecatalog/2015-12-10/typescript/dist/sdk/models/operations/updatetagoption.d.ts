import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateTagOption = "AWS242ServiceCatalogService.UpdateTagOption"
}
export declare class UpdateTagOptionRequest extends SpeakeasyBase {
    updateTagOptionInput: shared.UpdateTagOptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTagOptionXAmzTargetEnum;
}
export declare class UpdateTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DuplicateResourceException
     */
    duplicateResourceException?: any;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
    /**
     * Success
     */
    updateTagOptionOutput?: shared.UpdateTagOptionOutput;
}
