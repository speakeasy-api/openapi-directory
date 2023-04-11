import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCopyProductStatusXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeCopyProductStatus = "AWS242ServiceCatalogService.DescribeCopyProductStatus"
}
export declare class DescribeCopyProductStatusRequest extends SpeakeasyBase {
    describeCopyProductStatusInput: shared.DescribeCopyProductStatusInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCopyProductStatusXAmzTargetEnum;
}
export declare class DescribeCopyProductStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCopyProductStatusOutput?: shared.DescribeCopyProductStatusOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
