import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateActionDocument } from "./templateactiondocument";
/**
 * Success
 */
export declare class ListTemplateActionsResponse extends SpeakeasyBase {
    items?: TemplateActionDocument[];
    nextToken?: string;
}
