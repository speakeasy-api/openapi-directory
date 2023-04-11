import { SpeakeasyBase } from "../../../internal/utils";
import { InputProcessingConfigurationDescription } from "./inputprocessingconfigurationdescription";
/**
 * Success
 */
export declare class AddApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
    applicationARN?: string;
    applicationVersionId?: number;
    inputId?: string;
    inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}
