import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete a configuration template.
 */
export declare class DeleteConfigurationTemplateMessage extends SpeakeasyBase {
    applicationName: string;
    templateName: string;
}
