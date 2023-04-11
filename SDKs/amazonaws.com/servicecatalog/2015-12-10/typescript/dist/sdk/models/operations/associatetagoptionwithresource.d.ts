import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateTagOptionWithResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateTagOptionWithResource = "AWS242ServiceCatalogService.AssociateTagOptionWithResource"
}
export declare class AssociateTagOptionWithResourceRequest extends SpeakeasyBase {
    associateTagOptionWithResourceInput: shared.AssociateTagOptionWithResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateTagOptionWithResourceXAmzTargetEnum;
}
export declare class AssociateTagOptionWithResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateTagOptionWithResourceOutput?: Record<string, any>;
    contentType: string;
    /**
     * DuplicateResourceException
     */
    duplicateResourceException?: any;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
