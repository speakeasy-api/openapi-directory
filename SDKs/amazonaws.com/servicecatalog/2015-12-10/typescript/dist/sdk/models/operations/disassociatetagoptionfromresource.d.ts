import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateTagOptionFromResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateTagOptionFromResource = "AWS242ServiceCatalogService.DisassociateTagOptionFromResource"
}
export declare class DisassociateTagOptionFromResourceRequest extends SpeakeasyBase {
    disassociateTagOptionFromResourceInput: shared.DisassociateTagOptionFromResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateTagOptionFromResourceXAmzTargetEnum;
}
export declare class DisassociateTagOptionFromResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateTagOptionFromResourceOutput?: Record<string, any>;
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
