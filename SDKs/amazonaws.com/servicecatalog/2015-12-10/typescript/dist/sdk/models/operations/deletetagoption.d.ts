import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteTagOption = "AWS242ServiceCatalogService.DeleteTagOption"
}
export declare class DeleteTagOptionRequest extends SpeakeasyBase {
    deleteTagOptionInput: shared.DeleteTagOptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagOptionXAmzTargetEnum;
}
export declare class DeleteTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTagOptionOutput?: Record<string, any>;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
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
