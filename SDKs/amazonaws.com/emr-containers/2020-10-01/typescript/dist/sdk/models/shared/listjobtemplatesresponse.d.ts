import { SpeakeasyBase } from "../../../internal/utils";
import { JobTemplate } from "./jobtemplate";
/**
 * Success
 */
export declare class ListJobTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templates?: JobTemplate[];
}
