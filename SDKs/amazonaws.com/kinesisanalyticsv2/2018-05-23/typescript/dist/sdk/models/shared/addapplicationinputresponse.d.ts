import { SpeakeasyBase } from "../../../internal/utils";
import { InputDescription } from "./inputdescription";
/**
 * Success
 */
export declare class AddApplicationInputResponse extends SpeakeasyBase {
    applicationARN?: string;
    applicationVersionId?: number;
    inputDescriptions?: InputDescription[];
}
