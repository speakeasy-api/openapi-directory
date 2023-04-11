import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateBudgetFromResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateBudgetFromResource = "AWS242ServiceCatalogService.DisassociateBudgetFromResource"
}
export declare class DisassociateBudgetFromResourceRequest extends SpeakeasyBase {
    disassociateBudgetFromResourceInput: shared.DisassociateBudgetFromResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateBudgetFromResourceXAmzTargetEnum;
}
export declare class DisassociateBudgetFromResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateBudgetFromResourceOutput?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
