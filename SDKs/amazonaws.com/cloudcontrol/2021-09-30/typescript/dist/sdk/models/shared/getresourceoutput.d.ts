import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDescription } from "./resourcedescription";
/**
 * Success
 */
export declare class GetResourceOutput extends SpeakeasyBase {
    /**
     * Represents information about a provisioned resource.
     */
    resourceDescription?: ResourceDescription;
    typeName?: string;
}
