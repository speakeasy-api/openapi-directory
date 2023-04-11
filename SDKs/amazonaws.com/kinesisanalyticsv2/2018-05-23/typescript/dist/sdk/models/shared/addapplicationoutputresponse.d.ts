import { SpeakeasyBase } from "../../../internal/utils";
import { OutputDescription } from "./outputdescription";
/**
 * Success
 */
export declare class AddApplicationOutputResponse extends SpeakeasyBase {
    applicationARN?: string;
    applicationVersionId?: number;
    outputDescriptions?: OutputDescription[];
}
