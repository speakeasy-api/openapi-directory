import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CopyProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceCopyProduct = "AWS242ServiceCatalogService.CopyProduct"
}
export declare class CopyProductRequest extends SpeakeasyBase {
    copyProductInput: shared.CopyProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyProductXAmzTargetEnum;
}
export declare class CopyProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    copyProductOutput?: shared.CopyProductOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
