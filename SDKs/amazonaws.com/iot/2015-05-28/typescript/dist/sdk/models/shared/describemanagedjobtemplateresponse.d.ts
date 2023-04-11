import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentParameter } from "./documentparameter";
/**
 * Success
 */
export declare class DescribeManagedJobTemplateResponse extends SpeakeasyBase {
    description?: string;
    document?: string;
    documentParameters?: DocumentParameter[];
    environments?: string[];
    templateArn?: string;
    templateName?: string;
    templateVersion?: string;
}
