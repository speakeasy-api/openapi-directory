import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateMetadata } from "./templatemetadata";
/**
 * Success
 */
export declare class ListTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templatesMetadata?: TemplateMetadata[];
}
